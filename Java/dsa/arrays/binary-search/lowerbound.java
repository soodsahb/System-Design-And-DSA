class Solution {
    public int lowerBound(int[] nums, int x) {
       int low=0,high=nums.length-1,mid=0,index=nums.length;

       while(low<=high){
        mid=(low+high)/2;

        if(nums[mid]>=x){
            index=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
       }


       return index;
     }
}
