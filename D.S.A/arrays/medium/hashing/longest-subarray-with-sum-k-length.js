function longestsubarray(nums,k){

    let map = new Map();
    let maxlen=0,sum=0;

    for(let i=0;i<nums.length;i++){

        sum+=nums[i];

        if(sum===k){
            maxlen=i+1;
        }

        if(map.has(sum-k)){
            let len=i-map.get(sum-k);
            maxlen=Math.max(maxlen,len);
        }

        if(!map.has(sum)){
            map.set(sum,i);
        }
    }

    return maxlen;

}

console.log(longestsubarray([1,-1,0,1,1,1,1,4,2,3],4)) 

// Explanation:
// - Keep a running prefix sum while scanning the array.
// - If `sum === k`, then subarray from `0` to `i` is valid, so length is `i + 1`.
// - For any index `i`, if `(sum - k)` was seen before, subarray between those indices sums to `k`.
// - Use map to store first occurrence of each prefix sum for maximum possible length.
// - Update `maxlen` whenever a longer valid subarray is found.
// - Return `maxlen` as the longest subarray length with sum `k`.

// Complexity:
// - Time: O(n) because each prefix sum is processed once with O(1) average map operations.
// - Space: O(n) because map can store prefix sums for all indices.

