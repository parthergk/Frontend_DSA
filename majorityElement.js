const arr = [1, 2, 3, 5, 2, 6, 2];

function majorityElemet(arr) {
  let me;
  for (i = 0; i <= arr.length; i++) {    
    for (j = i+1; j <= arr.length; j++) {      
      if (arr[i] === arr[j]) {        
        me = arr[i];
        return me;
      }
    }
  }
  return me;
}

const me = majorityElemet(arr);

console.log(me);
