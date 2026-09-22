import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

mkdirSync('verification', { recursive: true });
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
let failed = false;
for (const [name, scope] of [
  ['dependency-audit', ['--include=dev', '--include=optional']],
  ['dependency-audit-production', ['--omit=dev']],
]) {
  const result = spawnSync(npm, ['audit', '--json', '--audit-level=low', ...scope], {
    encoding: 'utf8', timeout: 120000, maxBuffer: 8 * 1024 * 1024,
  });
  writeFileSync(`verification/${name}.json`, result.stdout || '{}');
  try {
    if (result.error) throw result.error;
    const report = JSON.parse(result.stdout);
    assert.equal(result.status, 0, `npm audit exited with ${result.status}: ${result.stderr}`);
    assert.equal(report.error, undefined, 'The registry returned an audit error');
    assert.equal(report.metadata?.vulnerabilities?.total, 0, 'Reported vulnerabilities must be zero');
    assert.equal(Object.keys(report.vulnerabilities ?? {}).length, 0, 'Vulnerability entries must be empty');
    console.log(`${name}: zero reported vulnerabilities`);
  } catch (error) {
    failed = true;
    console.error(`${name}: ${error.message}`);
  }
}
if (failed) process.exitCode = 1;
