// function duplicates(arr) {
//   return [...new Set(arr)];
// }

function duplicates(arr) {
    return arr.filter((item, index)=> arr.indexOf(item)===index);
}

const print = duplicates([1, 8, 3, 9, 8, 4, 0, 1]);
console.log("Output", print);
