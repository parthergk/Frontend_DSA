function palindrome(str) {
    let s = 0, e = str.length - 1;
    while(s<e){
        if (str[s]!==str[e]) {
            return false
        }
        s++;
        e--;
    }
return true;
}

console.log("Palindrome", palindrome("racecar"));
