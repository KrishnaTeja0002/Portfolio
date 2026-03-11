const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to 1440x900
  await page.setViewport({ width: 1440, height: 900 });

  // Navigate to local dev server running Vite
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });

  // Wait a little extra bit for loading animations
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Take screenshot
  await page.screenshot({ path: 'src/assets/project-4-new.jpg' });

  await browser.close();
  console.log('Screenshot saved to src/assets/project-4-new.jpg');
})();
