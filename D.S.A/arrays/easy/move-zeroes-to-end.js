function moveZeroestoEnd(arr){
    let i=0;

    for(let j=0;j<arr.length;j++){
        if(arr[j]!==0){
            [arr[j],arr[i]]=[arr[i],arr[j]];
            i++;
        }
    }

    return arr;
}

console.log(moveZeroestoEnd([0,0,2,0,2,4,0]))