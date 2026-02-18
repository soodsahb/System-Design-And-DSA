function twoSum(arr,target){

    let map= new Map();
    let complement;
    for(let i=0;i<arr.length;i++){

        complement=target-arr[i];

        if(map.has(complement)){
            return [map.get(complement),i]
        }

        map.set(arr[i],i);
    }

}


console.log(twoSum([2,8,7,10],9));
// Explanation:
// - Use map to store number and its index.
// - For each number, compute required complement.
// - If complement exists in map, return both indices.
// - Otherwise store current number index.
// - Achieves O(n) time complexity.


// Complexity:
// - Time: O(n) because each number is checked once with O(1) average map lookup.
// - Space: O(n) because map may store all seen elements.

