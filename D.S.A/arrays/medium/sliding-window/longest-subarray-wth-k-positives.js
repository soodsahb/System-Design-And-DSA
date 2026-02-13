function longestSubarray(arr,k){
    
    let i=0;
    let j=0;
    let sum=0;
    let maxLength=0;
    while(j<arr.length){
        sum+=arr[j];
        while(sum>k){
            sum-=arr[i];
            i++;
        }
        if(sum===k){
            maxLength=Math.max(maxLength,j-i+1)
        }

        j++;

    }

    return maxLength


}

console.log(longestSubarray([1,2,3,1,1,1,1,4,2,3],3))
// Explanation:
// - Use sliding window with pointers `i` and `j`.
// - Expand window by adding `arr[j]` to sum.
// - Shrink from left while sum exceeds `k`.
// - When sum equals `k`, update maximum length.
// - Continue until right pointer reaches end.

