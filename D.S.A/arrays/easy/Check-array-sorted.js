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

