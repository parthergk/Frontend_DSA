function reverse(arr){
    let l = 0, r = arr.length -1;
    while (l<r) {
       [arr[l], arr[r]] = [arr[r], arr[l]];
       l++;
       r--;
    }
    return arr
}

const rev = reverse([4,8,2,0,1,8,4,9,2]);
console.log("Reverse Array", rev);
