/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let len=0,maxlen=0;
    

    let l=0,r=0,zeroes=0;

    while(r<nums.length){
        if(nums[r]===0){
            zeroes++;
        }
     
     if(zeroes<=k){
        len=r-l+1;
        maxlen=Math.max(len,maxlen);
     }else{
        while(nums[l]!==0){
            l++;
        }
        zeroes--;
        l++;
         len=r-l+1;
        maxlen=Math.max(len,maxlen);
     }

     r++;
    }

    return maxlen
};

// Explanation:
// - We want the longest group of 1s in the array.
// - We are allowed to change at most `k` zeroes into 1s.
// - Think of `l` and `r` as a moving window (a box) on the array.
// - `r` moves right to include new numbers in the box.
// - If we see a 0, we increase `zeroes` because this box has one more zero.
// - If `zeroes` is `<= k`, this box is valid, so we check its length.
// - If `zeroes` becomes `> k`, box is invalid, so move `l` right to shrink it.
// - While shrinking, once we remove one zero from the left side, `zeroes` is reduced.
// - After fixing the box, again compare length with `maxlen`.
// - In the end, `maxlen` is the biggest valid window, so return it.

// Complexity:
// - Time: O(n) because left/right pointers each move through the array once.
// - Space: O(1) because only counters and pointers are used.

