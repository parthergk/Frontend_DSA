function count(str) {
    let count = {v:0, c:0};
  for (const char of str) {
    if (char === "a" || char==="e" || char==="i" || char === "o" || char === "u") {
        count["v"] = (count["v"] | 0)+1;
    }else{
        count["c"] = (count["c"] | 0)+1;
    }
  }  
  return count;
};

console.log("Vowel and consonant", count("gaurav"));