import { test, expect } from "@playwright/test";
import path from "path";
import exceljs from "exceljs";

test("Papaya", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const replaceText = "1";
  const fruit = "Papaya";

  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html"
  );

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  const download = await downloadPromise;
  const targetDir = "F:/Downloads";
  const filePath = path.join(targetDir, download.suggestedFilename());
  await download.saveAs(filePath);
  await excel(replaceText, fruit);
  await page
    .getByRole("button", { name: "Choose File" })
    .setInputFiles("F:/Downloads/download.xlsx");

  const textLocator = page.getByText(fruit);
  const desiedLocator = page.getByRole("row").filter({ has: textLocator });
  await expect(desiedLocator.locator("#cell-4-undefined")).toContainText(
    replaceText
  );
  await page.pause();
});

async function excel(replaceText: string, fruit: string) {
  // let output = {row:-1, cell:-1};
  const workbook = new exceljs.Workbook();
  await workbook.xlsx.readFile("F:/Downloads/download.xlsx");
  const worksheet = workbook.getWorksheet("Sheet1");

  worksheet?.eachRow((row, rowNumber) => {
    row.eachCell((cell, cellNumber) => {
      if (cell.value === replaceText) {
        // output.row = rowNumber;
        // output.cell = cellNumber;
        const fetchCell = worksheet.getCell(rowNumber, cellNumber + 2);
        fetchCell.value = fruit;
      }
    });
  });
  await workbook.xlsx.writeFile("F:/Downloads/download.xlsx");
}
