function removeDuplicates(arr){
    let i=0;

    for(let j=1;j<arr.length;j++){
        if(arr[i]===arr[j]){
        //if same no need to do anything 
        }else{
            //if different place the unique element at place of duplicate and move ahead
            arr[i+1]=arr[j];
            i++;
        }
    }
    return arr;
}

console.log(removeDuplicates([1,1,2,2,2,3,3]))
// Explanation:
// - Use pointer `i` for last unique element.
// - Scan array with pointer `j` from index 1.
// - If value differs, place it at `i+1`.
// - Increase `i` when a new unique appears.
// - Left part of array becomes unique set.


// Complexity:
// - Time: O(n) because `j` scans array once while `i` tracks unique boundary.
// - Space: O(1) because duplicates are removed in-place.

