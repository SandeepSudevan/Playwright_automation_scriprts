// Diamond pattern

// function printDiamond(totalHeight) {
//   if (totalHeight % 2 === 0) {
//     console.log("Please provide an odd number");
//     return;
//   }

//   const mid = Math.floor(totalHeight / 2);

//   for (let i = 0; i < totalHeight; i++) {
//     const spaces = Math.abs(mid - i);
//     const stars = totalHeight - 2 * spaces;

//     console.log(" ".repeat(spaces) + "*".repeat(stars));
//   }
// }

// printDiamond(9);

// Pyramid pattern

// function printPyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     const spaces = " ".repeat(n - i);
//     const stars = "*".repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }
// }

// printPyramid(5);

// function printRightTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("*".repeat(i));
//   }
// }

// printRightTriangle(5);
