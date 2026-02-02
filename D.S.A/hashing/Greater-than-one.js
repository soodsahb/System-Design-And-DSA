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

let initialResult= CountDigits([1,1,1,2,2,2,2,23,3,3]);

let result=[];
for(let [key,value] of initialResult){
    if(value>1){
        result.push(key);
    }
}

console.log(result);
