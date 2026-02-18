function mergeSort(arr,low,high){
    if(low>=high) return;

    let mid = Math.floor((low+high)/2);
   
    //left half
    mergeSort(arr,low,mid);
    //right half
    mergeSort(arr,mid+1,high);

    merge(arr,low,mid,high);
}

function merge(arr,low,mid,high){

    let temp =[];
    let left =low;
    let right=mid+1;

    while(left<=mid&&right<=high){

            if(arr[left]<=arr[right]){
                temp.push(arr[left]);
                left++
            }else{
                temp.push(arr[right]);
                right++;
            }
    }

    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }

  for(let i=low;i<=high;i++){
    arr[i]=temp[i-low];

  }

}

let arr=[3,7,-1,9,0];

mergeSort(arr,0,arr.length-1);
console.log(arr);
// Explanation:
// - Divide array recursively into two halves.
// - Continue until subarray size becomes 1.
// - Merge two sorted halves using temporary array.
// - Copy merged result back to original array.
// - Produces fully sorted array in O(n log n).


// Complexity:
// - Time: O(n log n) because array is recursively divided and merged at each level.
// - Space: O(n) because temporary array is used during merge.

