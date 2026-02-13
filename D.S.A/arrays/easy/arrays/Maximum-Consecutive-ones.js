/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0;
    let max=0;

    for( let i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++;
        }else{
          if(count>max){
            max=count;
           
          }
           count=0;
        }
    }
    if(count>max){
        max=count;
      
    }

      return max;

  
};
// Explanation:
// - Count current streak of consecutive 1s.
// - Increment streak when element is 1.
// - On 0, update max streak and reset count.
// - Perform one final max update after loop.
// - Return longest streak found.

