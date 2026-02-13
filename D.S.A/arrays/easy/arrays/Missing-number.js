/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n= nums.length;

    let sum = (n*(n+1))/2;
    let actualsum=0;

    for(let i=0;i<n;i++){
      actualsum+=nums[i];
    }

    return sum-actualsum;
};
// Explanation:
// - Let `n` be array length.
// - Compute expected sum of `0..n` using formula.
// - Compute actual sum of elements.
// - Difference gives missing value.
// - Return expected minus actual sum.

