import assert from 'node:assert/strict';
import net from 'node:net';
import { once } from 'node:events';
import { test } from 'node:test';
import { sendSmtpMail } from '../lib/email/smtp.ts';

// No provider credentials or external delivery: the SMTP receiver binds only to loopback.
async function receiver(t, { rejectRecipient = false } = {}) {
  const messages = [];
  const recipients = [];
  const sockets = new Set();
  const server = net.createServer(socket => {
    sockets.add(socket);
    socket.on('close', () => sockets.delete(socket));
    socket.on('error', () => {});
    let buffer = '';
    let inData = false;
    let message = [];
    socket.setEncoding('utf8');
    socket.write('220 localhost ESMTP test receiver\r\n');
    socket.on('data', chunk => {
      buffer += chunk;
      while (buffer.includes('\r\n')) {
        const boundary = buffer.indexOf('\r\n');
        const line = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);
        if (inData) {
          if (line === '.') {
            messages.push(message.join('\r\n'));
            message = [];
            inData = false;
            socket.write('250 Message accepted locally\r\n');
          } else message.push(line.startsWith('..') ? line.slice(1) : line);
        } else if (/^(EHLO|HELO) /i.test(line)) {
          socket.write('250-localhost\r\n250-AUTH PLAIN\r\n250 SIZE 1000000\r\n');
        } else if (/^AUTH PLAIN /i.test(line)) {
          socket.write('235 Test authentication accepted\r\n');
        } else if (/^MAIL FROM:/i.test(line)) {
          socket.write('250 Sender accepted\r\n');
        } else if (/^RCPT TO:/i.test(line)) {
          recipients.push(line);
          socket.write(rejectRecipient ? '550 Recipient rejected for test\r\n' : '250 Recipient accepted\r\n');
        } else if (line === 'DATA') {
          inData = true;
          socket.write('354 End message with a dot\r\n');
        } else if (line === 'QUIT') {
          socket.end('221 Closing test connection\r\n');
        } else if (line === 'RSET' || line === 'NOOP') {
          socket.write('250 OK\r\n');
        } else {
          socket.write('500 Unsupported test command\r\n');
        }
      }
    });
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(async () => {
    for (const socket of sockets) socket.destroy();
    await new Promise(resolve => server.close(resolve));
  });
  return { port: server.address().port, messages, recipients };
}

async function withConfig(overrides, run) {
  const config = {
    SMTP_HOST: '127.0.0.1', SMTP_PORT: '465', SMTP_USER: 'test-user',
    SMTP_PASSWORD: 'test-password-not-a-secret', SMTP_SECURE: 'false',
    SMTP_FROM: 'Trafexa Nordic <website@example.invalid>', ...overrides,
  };
  const before = Object.fromEntries(Object.keys(config).map(key => [key, process.env[key]]));
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
  try { return await run(); } finally {
    for (const [key, value] of Object.entries(before)) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  }
}
const enquiry = {
  to: 'admin@example.invalid', subject: 'Project enquiry', text: 'A test enquiry.',
  html: '<p>A test enquiry.</p>', replyTo: 'visitor@example.invalid',
};

test('SMTP wrapper delivers text, HTML and Reply-To with Nodemailer 10', { timeout: 10000 }, async t => {
  const smtp = await receiver(t);
  const result = await withConfig({ SMTP_PORT: String(smtp.port) }, () => sendSmtpMail(enquiry));
  assert.deepEqual(result.accepted, ['admin@example.invalid']);
  assert.ok(result.messageId);
  assert.equal(smtp.messages.length, 1);
  const message = smtp.messages[0];
  assert.match(message, /^From: Trafexa Nordic <website@example.invalid>/m);
  assert.match(message, /^Reply-To: visitor@example.invalid/m);
  assert.match(message, /Content-Type: text\/plain/);
  assert.match(message, /Content-Type: text\/html/);
  assert.match(message, /A test enquiry\./);
});

test('Untrusted subject newlines cannot add a Bcc header or recipient', { timeout: 10000 }, async t => {
  const smtp = await receiver(t);
  await withConfig({ SMTP_PORT: String(smtp.port) }, () => sendSmtpMail({ ...enquiry, subject: 'Project\r\nBcc: other@example.invalid' }));
  assert.equal(smtp.messages.length, 1);
  assert.doesNotMatch(smtp.messages[0], /^Bcc:/im);
  assert.deepEqual(smtp.recipients, ['RCPT TO:<admin@example.invalid>']);
});

test('SMTP rejection is propagated instead of reported as a successful delivery', { timeout: 10000 }, async t => {
  const smtp = await receiver(t, { rejectRecipient: true });
  const logging = t.mock.method(console, 'error', () => {});
  await withConfig({ SMTP_PORT: String(smtp.port) }, () => assert.rejects(sendSmtpMail(enquiry), error => error.responseCode === 550));
  assert.equal(smtp.messages.length, 0);
  assert.equal(logging.mock.calls.length, 1);
});

test('Missing SMTP credentials fail without attempting delivery', async () => {
  await withConfig({ SMTP_PASSWORD: undefined }, () => assert.rejects(sendSmtpMail(enquiry), /Missing SMTP environment variables/));
});

test('Invalid SMTP port fails before a connection is opened', async () => {
  await withConfig({ SMTP_PORT: 'not-a-number' }, () => assert.rejects(sendSmtpMail(enquiry), /Invalid SMTP_PORT/));
});
