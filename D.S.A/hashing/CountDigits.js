function CountDigits(arr){

    let map =new Map();

    for( let num of arr){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1);
        }
    }

    return map;

}

console.log(CountDigits([1,1,1,2,3,4,5,5,5]));