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