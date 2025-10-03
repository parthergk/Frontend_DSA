function long_sub_str(str) {
  const set = new Set();
  let l = 0, max=0;


  for (let r = 0; r < str.length; r++) {
    while (set.has(str[r])) {
        set.delete(str[l]);
        l++
    }
    set.add(str[r]);
    max = Math.max(max, r-l+1);
  }
  return max; 
}
console.log(long_sub_str("abcabcbb"));
