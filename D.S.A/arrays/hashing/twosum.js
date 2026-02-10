function twoSum(arr,target){

    let map= new Map();
    let complement;
    for(let i=0;i<arr.length;i++){

        complement=target-arr[i];

        if(map.has(complement)){
            return [map.get(complement),i]
        }

        map.set(arr[i],i);
    }

}


console.log(twoSum([2,8,7,10],9));