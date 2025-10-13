function main(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }   
        }
        
    }    
    return arr
}

console.log("Sorted array", main( [9,1,3,4,2,0,8]));
