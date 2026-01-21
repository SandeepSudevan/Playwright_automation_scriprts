// how to merged two arrays in javascript

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const merged = arr1.concat(arr2);
// console.log(merged);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const merged = arr2.reduce(
  (acc, val) => {
    acc.push(val);
    return acc;
  },
  [...arr1]
);

console.log(merged);
