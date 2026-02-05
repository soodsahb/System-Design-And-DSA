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