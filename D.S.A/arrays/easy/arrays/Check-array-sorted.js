function checkSorted(arr){

    for(let i=1;i<arr.length;i++){
      
        if(arr[i]>=arr[i-1]){

        }
        else{
            return false;
        }
    }
    return true;
}


console.log(checkSorted([1,2,3,3,4]))
// Explanation:
// - Start from second element.
// - Compare each value with previous value.
// - If current is smaller, array is unsorted.
// - Return false immediately on violation.
// - If no violation, return true.


// Complexity:
// - Time: O(n) because we scan the array once and compare adjacent elements.
// - Space: O(1) because only a few variables are used.

