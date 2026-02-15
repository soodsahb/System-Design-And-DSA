/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // `l` and `r` are window pointers, `maxlen` is final answer.
    // `maxfreq` stores highest count of any single character in current window.
    let maxlen=0,l=0,r=0,maxfreq=0;
    // Frequency map for characters inside the current window.
    let map =new Map();

    while(r<s.length){
      // Include s[r] in window and update its count.
      map.set(s[r],(map.get(s[r])||0)+1);

      // Update highest repeating character count seen in this window.
      maxfreq=Math.max(maxfreq,map.get(s[r]));

      // If chars to replace > k, window is invalid -> shrink from left.
      // Needed replacements = window size - most frequent char count.
      while((r-l+1)-maxfreq>k){
        map.set(s[l],map.get(s[l])-1);
        l++;
      }

      // Window is valid here; update best length.
      maxlen=Math.max(maxlen,r-l+1);

      // Expand window to the right.
      r++;
    }

    return maxlen;

};

// Explanation:
// - Start a window with `l = 0`, `r = 0` and keep counts in `map`.
// - For each `r`, add `s[r]` to `map` and update `maxfreq`.
// - `maxfreq` means: count of most common character in current window.
// - Check `(r - l + 1) - maxfreq`; this is how many chars must be replaced.
// - If replacements needed are more than `k`, move `l` right and decrease counts.
// - After window becomes valid, update `maxlen` with current window size.
// - Continue until `r` reaches end; `maxlen` is the longest valid substring.
