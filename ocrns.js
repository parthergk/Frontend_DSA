function main(arr) {
  let count = {};
  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

const print = main([1, 8, 9, 2, 4, 0, 1, 1, 9, 8, 3]);
console.log("OutPut", print);
