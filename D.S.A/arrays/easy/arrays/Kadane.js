function Kadane(arr){


     let maximum= arr[0]
     let sum=0;
    for(let i=0;i<arr.length;i++){
      sum+=arr[i];

      maximum=Math.max(maximum,sum);

      if(sum<0){
        sum=0;
      }
    }

    return maximum;
}

console.log(Kadane([-2,-3,4,-1,2,1,5,-3]))
// Explanation:
// - Maintain running sum of current subarray.
// - Update maximum answer with current sum.
// - If running sum becomes negative, reset to 0.
// - This discards harmful prefixes.
// - Final maximum is best subarray sum.


// Complexity:
// - Time: O(n) because each element is processed once in one loop.
// - Space: O(1) because only running sum and max are stored.

