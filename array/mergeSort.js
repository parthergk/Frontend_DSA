function main(arr){
  if (arr.length<=1) {
    return arr;
  }
  let mid = Math.round(arr.length/2);
  let left =  arr.slice(0, mid);
  let right = arr.slice(mid);

 return merge(main(left), main(right));
}


function merge(left, right) {
  let result = [], i = 0, j = 0;

  while (i<left.length && j<right.length) {
    if (left[i]<right[j]) {
      result.push(left[i]);
      i++;
    }else{
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)]
}
console.log("Sorted array", main([2,3,7,4,8,1]));

let left = [];
let right = [1];