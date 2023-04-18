const puppeteer = require("puppeteer");

async function pupppeteerTest() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://pptr.dev/");
  let num = Math.floor(Math.random() * (8 - 0 + 1) + 0);
  page.setViewport({ width: 1366, height: 870, deviceScaleFactore: 1 });

  await page.screenshot({ path: `screenshot${num}.png` });
  await browser.close();
}

pupppeteerTest();
