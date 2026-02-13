function LeftRotateByOne(arr){

    let first =arr[0];

    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }

    arr[arr.length-1]=first;

    return arr;
}

console.log(LeftRotateByOne([1,2,3,4,5]));
// Explanation:
// - Save first element before shifting.
// - Shift each element one step left.
// - Place saved first element at last index.
// - Rotation happens in-place.
// - Return rotated array.

