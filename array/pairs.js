function main(arr, k) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left]+arr[right];
    if (sum===k) {
        return [arr[left], arr[right]];
    }else if (sum<k) {
        left++
    }else{
        right--;
    }
  }
  return [];
}

console.log(main([1, 2, 3, 4, 6, 7, 8], 11));
