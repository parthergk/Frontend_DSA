function maxNum(arr){
    let maxnum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[maxnum]<arr[i]) {
            maxnum = i;
        }
    }
    return arr[maxnum];
}

const mxnm = maxNum([4,8,2,0,8,4,9,2]);
console.log("Max number", mxnm);
