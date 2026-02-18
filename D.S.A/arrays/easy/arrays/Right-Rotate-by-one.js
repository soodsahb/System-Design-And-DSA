function RightRotateByOne(arr){
   
    let n= arr.length;
    let last=arr[n-1];

    for(let i=n-2;i>=0;i--){
        arr[i+1]=arr[i];
    }

    arr[0]=last;

    return arr;
}

console.log(RightRotateByOne([1,2,3,4,5]))
// Explanation:
// - Save last element before shifting.
// - Shift elements from right to left direction.
// - Move each value one index ahead.
// - Put saved last value at index 0.
// - Return right-rotated array.


// Complexity:
// - Time: O(n) because elements are shifted once from right to left.
// - Space: O(1) because only one extra variable stores the last element.

