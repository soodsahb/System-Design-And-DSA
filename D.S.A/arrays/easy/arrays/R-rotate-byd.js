function RrotateByD(arr,k){
    let n=arr.length;

    let d=k%n;

    if(d===0){
        return arr;
    }
    arr.reverse();
    arrrverse(0,d-1,arr);
    arrrverse(d,n-1,arr);

    
}

function arrrverse(l,r,arr){
    while(l<r){
        [arr[l],arr[r]]=[arr[r],arr[l]];
        l++;
        r--;
    }
}

let arr=[1,2,3,4,5,6,7];
RrotateByD(arr,3);
console.log(arr);
// Explanation:
// - Compute effective rotation with `d = k % n`.
// - Reverse whole array first.
// - Reverse first `d` elements.
// - Reverse remaining elements.
// - Final array is right-rotated by `d`.


// Complexity:
// - Time: O(n) because reverse operations together process each element constant times.
// - Space: O(1) because rotation uses in-place swapping.

