function main(arr) {
    const even  = arr.filter((item)=> item % 2 === 0);
    const odd  = arr.filter((item)=> item % 2 !== 0);
    return even;
}

const OutPut = main([1,8,7,9,3,5,4]);
console.log("OutPut", OutPut);
