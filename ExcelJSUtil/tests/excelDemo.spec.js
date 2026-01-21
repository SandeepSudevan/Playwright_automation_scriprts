const ExcelJS = require("exceljs");
const { test, expect } = require("@playwright/test");

async function writeExcel(repText, newText, path, addSpan) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path);
  const worksheet = workbook.getWorksheet("Sheet1");

  const output = await readExcel(worksheet, repText, newText);

  const cell = worksheet.getCell(
    output.row,
    output.column + addSpan.columnSpan
  );
  cell.value = newText;
  await workbook.xlsx.writeFile(path);
}

async function readExcel(worksheet, repText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, columnNumber) => {
      if (cell.value === repText) {
        output.row = rowNumber;
        output.column = columnNumber;
      }
    });
  });

  return output;
}

test("Upload Excel", async ({ page }) => {
  const text = "Kivi";
  const number = "12";

  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html"
  );
  // Catch the download
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Download" }).click(),
  ]);

  // Save directly to hardcoded path (no File Explorer pop-up)
  const filePath = "F:\\Downloads\\download.xlsx";
  await download.saveAs(filePath);

  await writeExcel(text, number, "F:\\Downloads\\download.xlsx", {
    rowSpan: 0,
    columnSpan: 2,
  });
  await page.locator("#fileinput").click();
  await page
    .locator("#fileinput")
    .setInputFiles("F:\\Downloads\\download.xlsx");
  //await page.pause();
  const textLocator = page.getByText(text);
  const desiredRow = page.getByRole("row").filter({ has: textLocator });
  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(number);
});
