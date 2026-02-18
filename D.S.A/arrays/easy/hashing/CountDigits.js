function CountDigits(arr){

    let map =new Map();

    for( let num of arr){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1);
        }
    }

    return map;

}

console.log(CountDigits([1,1,1,2,3,4,5,5,5]));
// Explanation:
// - Initialize count as 0.
// - Repeat while number is greater than 0.
// - Remove last digit in each step.
// - Increment count for every digit removed.
// - Return total digit count.


// Complexity:
// - Time: O(n) because each array element is inserted/updated once in the map.
// - Space: O(u) because map stores counts for `u` unique elements.

