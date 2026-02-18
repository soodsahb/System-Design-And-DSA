/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    

    let count =atmost(nums,goal)-atmost(nums,goal-1);

    return count;
};

 function atmost(nums,k){

        let r=0,l=0,count=0,sum=0;

        while(r<nums.length){
          
          if(k<0) return 0;

         sum+=nums[r];

         while(sum>k){
            sum-=nums[l];
            l++;
         }

         count+=r-l+1;

         r++;
        }

        return count;
    }

// Explanation:
// - Main idea: `exactly(goal) = atMost(goal) - atMost(goal - 1)`.
// - `atmost(nums, k)` counts subarrays whose sum is less than or equal to `k`.
// - Use sliding window with `l` and `r`, and keep current window `sum`.
// - Expand with `r`; if `sum > k`, shrink from left by moving `l`.
// - For each `r`, valid subarrays ending at `r` are `(r - l + 1)`, so add to `count`.
// - Subtracting the two atMost counts gives subarrays with sum exactly equal to `goal`.
