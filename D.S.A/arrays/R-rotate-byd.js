function RrotateByD(arr,k){
    let n=arr.length;

    let d=k%n;

    if(d===0){
        return arr;
    }
    arr.reverse();
    arrrverse(0,d-1,arr);
    arrrverse(d,n-1,arr);

    
}

function arrrverse(l,r,arr){
    while(l<r){
        [arr[l],arr[r]]=[arr[r],arr[l]];
        l++;
        r--;
    }
}

let arr=[1,2,3,4,5,6,7];
RrotateByD(arr,3);
console.log(arr);