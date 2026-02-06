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