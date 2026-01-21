const ExcelJS = require("exceljs");

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

writeExcel("Kivi", "12", "F:\\Downloads\\download.xlsx", {
  rowSpan: 0,
  columnSpan: 2,
});
