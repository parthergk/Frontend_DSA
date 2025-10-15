function main(arr) {
    if (arr.length<=1) {
        return arr;
    }
    let pvit = arr[arr.length-1], left=[], right=[];

    for (let i = 0; i < arr.length-1; i++) {
        arr[0]<pvit ? left.push(i): right.push(i);
    }
    return [...main(left), pvit, ...main(right)];
}

console.log("Sorted array", main([5,1,3,7,2,9]));
