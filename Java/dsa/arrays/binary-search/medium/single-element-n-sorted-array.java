class Solution {
    public int singleNonDuplicate(int[] nums) {
           int low=1,mid=0,high=nums.length-2,n=nums.length;

      if(n==1){
        return nums[0];
      }

      if(nums[0]!=nums[1]) return nums[0];
      if(nums[n-1]!=nums[n-2]) return nums[n-1];

      while(low<=high){
        mid=(low+high)/2;

        if(nums[mid]!=nums[mid-1]&&nums[mid]!=nums[mid+1]){
            return nums[mid];
        }
      //we are standing on left half so eliminate 
        if(((mid%2==1)&&(nums[mid]==nums[mid-1]))||((mid%2==0)&&(nums[mid]==nums[mid+1]))){
            low=mid+1;
        }else{
            high=mid-1;
        }
      }

      return -1;
    }
}