/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let index=-1;
    let n=nums.length
     
     //find breakpoint
    for(let i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index=i;
            break;
        }
    }

    //if biggest permutation already reverse and return 
    if(index===-1){
        return nums.reverse();
    }
     //swap the next biggest element
    for(let i=n-1;i>=index;i--){
        if(nums[i]>nums[index]){
          [nums[i],nums[index]]=[nums[index],nums[i]];
          break;
        }
    }

    //then reverse from index+1 to last 

    let l =index+1;
    let r=n-1;

    while(l<r){
        [nums[l],nums[r]]=[nums[r],nums[l]];
        l++;
        r--;
    }
};