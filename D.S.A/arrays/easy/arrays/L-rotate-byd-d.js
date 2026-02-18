function LrotateByD(arr,k){
    let n=arr.length;

    let d=k%n;

    if(d===0){
        return arr;
    }
    
    arrrverse(0,d-1,arr);
    arrrverse(d,n-1,arr);

    arr.reverse();
}

function arrrverse(l,r,arr){
    while(l<r){
        [arr[l],arr[r]]=[arr[r],arr[l]];
        l++;
        r--;
    }
}

let arr=[1,2,3,4,5,6,7];
LrotateByD(arr,6);
console.log(arr);



// Explanation:
// - Convert rotations to effective `d = k % n`.
// - Reverse first `d` elements.
// - Reverse remaining `n-d` elements.
// - Reverse complete array to finish left rotation.
// - Works in-place with O(1) extra space.


// Complexity:
// - Time: O(n) because three reversals together touch each element constant times.
// - Space: O(1) because all swaps are in-place.

