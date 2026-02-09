function Kadane(arr){


     let maximum= arr[0]
     let sum=0;
    for(let i=0;i<arr.length;i++){
      sum+=arr[i];

      maximum=Math.max(maximum,sum);

      if(sum<0){
        sum=0;
      }
    }

    return maximum;
}

console.log(Kadane([-2,-3,4,-1,2,1,5,-3]))