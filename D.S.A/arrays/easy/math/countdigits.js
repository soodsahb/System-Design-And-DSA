function countDigits(n){

    let count=0;

    while(n>0){

        count++;

        n=Math.trunc(n/10);
    }

    return count;
}

console.log(countDigits(7));
// Explanation:
// - Initialize count as 0.
// - Repeat while number is greater than 0.
// - Remove last digit in each step.
// - Increment count for every digit removed.
// - Return total digit count.


// Complexity:
// - Time: O(n) because each array element is inserted/updated once in the map.
// - Space: O(u) because map stores counts for `u` unique elements.

