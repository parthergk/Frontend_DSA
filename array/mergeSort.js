function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.round(arr.length / 2);
  let right = arr.slice(0, mid);
  let left = arr.slice(mid);

  return merge(mergeSort(right), mergeSort(left));
}

function merge(right, left) {
  let result = [], i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i]<right[j]) {
        result.push(left[i])
        i++
    }else{
        result.push(right[j])
        j++
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}


console.log("sorted array", mergeSort([2,7,4,8,2,8,9,5]));
