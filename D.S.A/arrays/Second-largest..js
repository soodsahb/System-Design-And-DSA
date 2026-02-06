function secondLargest(arr){

    let max=-42422423;
    let secondMax=-3131412312;

    for(let i=0;i<arr.length;i++){
      
        if(arr[i]>max){
           
            secondMax=max;
            max=arr[i];
        }
    }

    return {
        max,
        secondMax
    }


}

console.log(secondLargest([11,22,33,44,55,66]))

//just iterate over the array as soon as we find new max previous max becomes secondMax or secondLargest