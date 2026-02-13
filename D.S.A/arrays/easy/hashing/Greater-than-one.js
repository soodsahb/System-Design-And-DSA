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

// Explanation:
// - First compute frequency map of all elements.
// - Traverse each key-value pair in map.
// - If frequency is greater than 1, collect key.
// - Store duplicates in result array.
// - Print final list of repeating elements.

