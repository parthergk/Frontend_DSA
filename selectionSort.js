function sort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min]>arr[j]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

const sortedArry = sort([8, 3, 2, 4, 1, 0, 9]);
console.log("Sorted arrya", sortedArry);