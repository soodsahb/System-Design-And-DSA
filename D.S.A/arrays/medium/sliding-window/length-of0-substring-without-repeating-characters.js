/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(s.length===1){
        return 1;
    }
   let map = new Map();

   let i=0,j=0;
   let len=0,maxlen=0;

   while(j<s.length){
    if(!map.has(s[j])){
     map.set(s[j],j);
     len=j-i+1;
     if(len>maxlen){
        maxlen=len;
     }
    }else{
     if(map.get(s[j])>=i){
      i=map.get(s[j])+1;
     }
     
     map.set(s[j],j);
     len=j-i+1;
     if(len>maxlen){
        maxlen=len;
     }
    }
     j++;
   }

   return maxlen

};

// Explanation:
// - Use sliding window with two pointers `i` (start) and `j` (end).
// - Store each character's latest index in a map.
// - If duplicate appears inside current window, move `i` to `lastIndex + 1`.
// - Update current window length as `j - i + 1`.
// - Track and return the maximum window length without repeating characters.

// Complexity:
// - Time: O(n) because each character index is processed with map updates/lookups.
// - Space: O(u) because map stores latest index of unique characters in window.

