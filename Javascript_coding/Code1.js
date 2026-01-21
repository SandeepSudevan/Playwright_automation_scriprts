// How_To_find_duplicate_elements_in_array

const arr = [1, 2, 3, 4, 5, 1, 2, 4, 10, 10];

const freq = {};
const duplicates = [];

for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}

for (let key in freq) {
  if (freq[key] > 1) {
    duplicates.push(Number(key));
  }
}

console.log(duplicates);

// const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log(duplicates);
