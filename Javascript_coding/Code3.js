// How To find second Largest value in array

const arr = [1, 5, 8, 22, 45, 62, 3, 57, 89, 70];

const second = arr.reduce(
  (acc, num) => {
    if (num > acc.max) {
      acc.secMax = acc.max;
      acc.max = num;
    } else if (num > acc.secMax && num !== acc.max) {
      acc.secMax = num;
    }
    return acc;
  },
  {
    max: -Infinity,
    secMax: -Infinity,
  }
);

console.log(second.secMax);
