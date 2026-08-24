import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

// Scroll to find the FeaturesList section (Test4 component)
await page.evaluate(() => {
  const element = document.querySelector('[style*="primary-red"]');
  if (element) element.scrollIntoView();
});

await page.waitForTimeout(2000);
await page.screenshot({ path: '/tmp/molecule_check.png', fullPage: false });
console.log('Screenshot saved to /tmp/molecule_check.png');

await browser.close();
