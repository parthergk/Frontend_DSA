function main(arr) {
    for (let index = 0; index < arr.length-1; index++) {
        let min = index;

        for (let j = index+1; j < arr.length; j++) {
            if (arr[min]>arr[j]) {
                min = j
            }            
        }
        
        [arr[min], arr[index]] = [arr[index], arr[min]];
    }
    return arr;
}

console.log("Sorted array", main([9,4,0,1,9,5,3]));