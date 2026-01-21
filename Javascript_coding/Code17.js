// how to find union of two arrays in javascript

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 5, 2, 6, 8, 7];

// const union = [...new Set([...arr1, ...arr2])];

// console.log(union);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 5, 2, 6, 8, 7];
const union = arr2.reduce(
  (acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  },
  [...arr1]
);

console.log(union);
