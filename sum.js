function sum(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}

const allSum = sum([2,8,3,4,9,8,8,9,2]);
console.log("All element sum", allSum);
