//moore voting algorithm


function majorityElement(arr){
        let count=0;
        let ele=-1;
    for(let i=0;i<arr.length;i++){
        

        if(count===0){
            ele=arr[i];
            count=1;
        }else if(ele===arr[i]){
            count++;
        }else{
            count--;
        }
    }

    return ele

}

console.log(majorityElement([7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,7,7,7,7,7,7]))