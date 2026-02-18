/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();

    if(s.length!==t.length) return false;

    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }
    }

    for(let i=0;i<t.length;i++){
        if(map.has(t[i])){
         map.set(t[i],map.get(t[i])-1)
        }else{
            return false;
        }
    }

    for(let value of map.values()){
     
     if(value!==0){
        return false;
     }
    }

    return true;
};

// Explanation:
// - Check length first; different lengths can never be anagrams.
// - Count each character of `s` in a hash map.
// - Traverse `t` and decrement the matching character count.
// - If a character in `t` is missing in the map, return false.
// - After processing, every map value must be 0 for a valid anagram.

// Complexity:
// - Time: O(n) because one pass counts and one pass decrements characters.
// - Space: O(u) because map stores counts of unique characters.

