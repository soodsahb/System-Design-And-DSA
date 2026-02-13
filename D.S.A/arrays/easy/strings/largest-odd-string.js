/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(str) {
    
    for(let i=str.length-1;i>=0;i--){
        if((Number(str[i])%2)!==0){
            return str.slice(0,i+1)
        }
    }
    return '';


};
// Explanation:
// - Scan string from rightmost digit to left.
// - Check each digit parity using modulo 2.
// - First odd digit from right gives largest odd prefix.
// - Return substring from start to that index.
// - If no odd digit found, return empty string.

