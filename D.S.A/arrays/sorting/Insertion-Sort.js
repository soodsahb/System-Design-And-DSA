function InsertionSort(arr){

    for(let i=0;i<=arr.length-1;i++){
        let j=i;

        while(j>0 &&arr[j-1]>arr[j]){
            [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
            j--;
        }
    }

    return arr;
}

console.log(InsertionSort([33,11,4,2,1]))
// Explanation:
// - Start from left and grow sorted portion.
// - Take current element and move it left as needed.
// - Swap while previous element is greater.
// - Stop when correct position is reached.
// - Repeat for all indices.

