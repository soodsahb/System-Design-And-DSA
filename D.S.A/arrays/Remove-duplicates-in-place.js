function removeDuplicates(arr){
    let i=0;

    for(let j=1;j<arr.length;j++){
        if(arr[i]===arr[j]){
        //if same no need to do anything 
        }else{
            //if different place the unique element at place of duplicate and move ahead
            arr[i+1]=arr[j];
            i++;
        }
    }
    return arr;
}

console.log(removeDuplicates([1,1,2,2,2,3,3]))