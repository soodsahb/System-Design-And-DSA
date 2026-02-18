function quicksort(arr,low,high){
    if(low<high){
        let partitionIndex=partition(arr,low,high);

        //sort left
        quicksort(arr,low,partitionIndex-1);

        //sort right
        quicksort(arr,partitionIndex+1,high); 
    }
}

function partition(arr,low,high){

    //find pivot

    let pivot=arr[low];
    let i=low;
    let j=high;

    
    while(i<j){
        //find number greater than pivot
        while(arr[i]<=pivot&&i<=high-1){
        
            i++;
        }
        
        //find smaller number than pivot
        while(arr[j]>pivot&&j>=low+1){
            j--;
        }

        //keep swapping 

        if(i<j) {
            [arr[j],arr[i]]=[arr[i],arr[j]]
        }
    }

    //swap pivot to its correct place

    [arr[low],arr[j]]=[arr[j],arr[low]];

    return j;

}
let arr=[-1,33,2,22,44,12];
quicksort(arr,0,arr.length-1);
console.log(arr);
// Explanation:
// - Choose first element as pivot.
// - Partition by placing smaller elements left and larger right.
// - Put pivot into its final sorted position.
// - Recursively quicksort left partition.
// - Recursively quicksort right partition.


// Complexity:
// - Time: Average O(n log n), worst O(n^2) because partitioning depends on pivot quality.
// - Space: O(log n) average recursion stack, worst O(n) stack in skewed partitions.

