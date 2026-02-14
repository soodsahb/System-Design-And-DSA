/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result=0;
    let mapObj={
        'I':1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }

    for(let i=0;i<s.length;i++){
       
     let currentvalue=mapObj[s[i]];
     let nextvalue=mapObj[s[i+1]];

     if(currentvalue<nextvalue){
      result+=nextvalue-currentvalue;
      i++;
     }else{
      result+=currentvalue;
     }
    }

    return result;
};

// Explanation:
// - Create a map of Roman symbols to their integer values.
// - Traverse the string from left to right.
// - Compare current symbol value with the next symbol value.
// - If current is smaller, handle subtractive pair (like IV, IX) and skip next.
// - Otherwise add current value directly to the result.
