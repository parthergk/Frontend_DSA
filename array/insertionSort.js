function main(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i-1;
        while (j>=0 && arr[j]>key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

console.log("Sorted array", main([3,2,8,4,7,1,9]));