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