import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const tools=process.env.VERIFICATION_TOOLS_DIR;
if(!tools)throw new Error('Set VERIFICATION_TOOLS_DIR to an isolated installation of playwright.');
const {chromium}=await import(pathToFileURL(path.join(tools,'node_modules/playwright/index.mjs')).href);
const origin=process.env.WEBSITE_TEST_URL||'http://127.0.0.1:3000';
assert.ok(['127.0.0.1','localhost'].includes(new URL(origin).hostname),'Never submit browser tests to production');
const out='verification';fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
const page=await context.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));const passed=[];
const check=(name,condition)=>{assert.ok(condition,name);passed.push(name);console.log(`PASS ${name}`);};
const routes=['/','/systems','/services','/about','/websites','/contact','/privacy','/cookies','/terms','/business-payments','/business-payments/apply','/business-payments/terms','/websites/hybrid-business','/websites/premium-3d','/websites/simple-info'];
try{
 await page.goto(origin);await page.getByRole('button',{name:'Reject optional',exact:true}).click();await page.reload();
 check('Cookie rejection persists',await page.getByRole('button',{name:'Reject optional',exact:true}).count()===0);
 await page.getByRole('button',{name:'Cookie preferences',exact:true}).click();await page.getByRole('button',{name:'Allow optional',exact:true}).click();await page.reload();
 check('Cookie acceptance persists',await page.getByRole('button',{name:'Allow optional',exact:true}).count()===0);
 for(const [route,label,width,height] of [['/','home-desktop',1440,1000],['/','home-mobile',390,844],['/about','company-desktop',1440,1000],['/systems','work-desktop',1440,1000],['/contact','contact-mobile',390,844]]){await page.setViewportSize({width,height});await page.goto(origin+route);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`${out}/${label}.png`,fullPage:true});}
 const productPaths=new Set();
 for(const route of routes){
  const response=await page.goto(origin+route);check(`HTTP 200 ${route}`,response?.status()===200);
  check(`English document ${route}`,await page.locator('html').getAttribute('lang')==='en');
  const text=await page.locator('body').innerText();
  check(`Current identities ${route}`,text.includes('Trafexa Nordic AB')&&text.includes('Diversa Solutions LLC')&&text.includes('556855-4884'));
  check(`No old branding or Swedish copy ${route}`,!/Attmos|Diversa Nordic|[åäöÅÄÖ]/.test(text));
  check(`One primary heading ${route}`,await page.locator('h1').count()===1);
  const internal=await page.locator('a[href^="/systems/"]').evaluateAll(nodes=>nodes.map(node=>node.getAttribute('href')));internal.forEach(href=>productPaths.add(href));
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:1000});check(`No horizontal overflow ${route} at ${width}`,await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));}
 }
 for(const route of productPaths)check(`Project story ${route}`,(await page.goto(origin+route))?.status()===200);
 for(const [old,target] of [['/integritetspolicy','/privacy'],['/cookiepolicy','/cookies'],['/anvandarvillkor','/terms'],['/foretagsbetalningar-bankgiro','/business-payments'],['/foretagsbetalningar-bankgiro/ansok','/business-payments/apply'],['/foretagsbetalningar-bankgiro/villkor','/business-payments/terms']]){await page.goto(origin+old);check(`Legacy URL ${old}`,new URL(page.url()).pathname===target);}
 await page.goto(origin+'/systems?category=energy');check('Energy category filter',await page.locator('.product-card').count()===2);
 await page.getByRole('link',{name:'All work',exact:true}).click();await page.waitForFunction(()=>document.querySelectorAll('.product-card').length===8);check('All work filter',await page.locator('.product-card').count()===8);
 await page.setViewportSize({width:390,height:844});await page.goto(origin);
 await page.getByRole('button',{name:'Menu',exact:false}).click();check('Mobile menu opens',await page.locator('#site-navigation').isVisible());await page.keyboard.press('Escape');check('Escape closes mobile menu',!await page.locator('#site-navigation').isVisible());check('Escape restores focus',await page.locator('.menu-toggle').evaluate(node=>node===document.activeElement));
 await page.getByRole('button',{name:'Menu',exact:false}).click();await page.getByRole('link',{name:'Trafexa Nordic home'}).first().click();check('Home link closes menu',!await page.locator('#site-navigation').isVisible());
 await page.goto(origin+'/contact?product=Nordklart');check('Project enquiry context',(await page.locator('textarea[name="message"]').inputValue()).includes('Nordklart'));
 await page.locator('button[type="submit"]').click();check('Empty contact blocked',await page.locator('input[name="name"]').evaluate(node=>!node.validity.valid));
 await page.locator('[name="name"]').fill('Website verification');await page.locator('[name="email"]').fill('verification@example.invalid');await page.locator('[name="projectType"]').selectOption('SaaS product');await page.locator('[name="preferredEntity"]').selectOption('us');await page.locator('button[type="submit"]').click();await page.locator('.form-alert').waitFor();
 check('Unavailable backend returns safe English error',(await page.locator('.form-alert').innerText()).includes('could not save'));check('No false success without saved enquiry',await page.locator('.success-card').count()===0);
 check('Contact values survive a failed submission',(await page.locator('[name="name"]').inputValue())==='Website verification'&&(await page.locator('[name="preferredEntity"]').inputValue())==='us');
 await page.goto(origin+'/business-payments/apply');await page.getByRole('button',{name:/3.*Confirm/}).click();check('Cannot skip required company fields',await page.locator('#company_name').isVisible());await page.waitForFunction(()=>document.activeElement?.id==='company_name');check('Invalid first step is focused',await page.locator('#company_name').evaluate(node=>node===document.activeElement));
 for(const [name,text] of Object.entries({company_name:'Verification Company',org_number:'000000-0000',contact_name:'Test Contact',email:'verification@example.invalid',phone:'0000000000',industry:'Software',business_description:'Local verification only'}))await page.locator(`[name="${name}"]`).fill(text);
 await page.getByRole('button',{name:'Next step',exact:true}).click();
 await page.locator('[name="customer_type"]').selectOption('B2B');
 for(const [name,text] of Object.entries({monthly_volume_estimate:'1000',invoice_count_estimate:'10',average_invoice_amount:'100'}))await page.locator(`[name="${name}"]`).fill(text);
 await page.locator('[name="urgency"]').selectOption('planning');await page.getByRole('button',{name:'Next step',exact:true}).click();
 await page.locator('[name="consent_contact"]').check();await page.locator('[name="consent_partner_forwarding"]').check();await page.getByRole('button',{name:'Submit application',exact:true}).click();
 await page.locator('.form-alert').waitFor();check('Application backend failure is safe',(await page.locator('.form-alert').innerText()).includes('unavailable'));
 await page.getByRole('button',{name:/1.*Company/}).click();check('Application fields survive a failed submission',await page.locator('[name="company_name"]').inputValue()==='Verification Company');
 check('404 for unknown project',(await page.goto(origin+'/systems/not-a-product'))?.status()===404);
 await page.evaluate(()=>localStorage.setItem('div3rsa-site-cookie-consent-v1','invalid-json'));await page.reload();await page.getByRole('button',{name:'Reject optional',exact:true}).waitFor();check('Corrupt consent recovered',await page.getByRole('button',{name:'Reject optional',exact:true}).isVisible());
 check('No browser runtime errors',errors.length===0);
 fs.writeFileSync(`${out}/report.json`,JSON.stringify({testedCommit:process.env.GITHUB_SHA,passed,errors},null,2));
}catch(error){await page.screenshot({path:`${out}/failure.png`,fullPage:true});fs.writeFileSync(`${out}/failure.txt`,String(error.stack||error));throw error;}finally{await browser.close();}
