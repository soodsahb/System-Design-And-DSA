/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return ""
   
    for(let i=0;i<strs[0].length;i++){
        let char =strs[0][i];

        for(let j=1;j<strs.length;j++){
            if(i>=strs[j].length||strs[j][i]!==char){
                return strs[0].substring(0,i);
            }
        }
    }

    return strs[0];
};
// Explanation:
// - Use first string as reference.
// - Compare each character position across all strings.
// - Stop when mismatch or shorter string appears.
// - Return substring up to last matched index.
// - If all match, first string itself is prefix.

