const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'dist/index.html');
const outputPath = path.join(__dirname, 'dist/resume.pdf');

async function printPDF() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(`file://${inputPath}`, {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({format: 'A4', printBackground: true});
  await browser.close();
  fs.writeFileSync(outputPath, pdf);
}

printPDF().then(() => process.exit(0));
