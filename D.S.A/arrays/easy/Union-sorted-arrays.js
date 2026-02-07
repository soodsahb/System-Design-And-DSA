function Union(arr1,arr2){

    let n1=arr1.length;
    let n2=arr2.length;

    let union=[];

    let i=0;
    let j=0;

    while(i<n1&&j<n2){
      
        if(arr1[i]<=arr2[j]){
            if(union[union.length-1]!=arr1[i]){
            union.push(arr1[i]);
            } 
            i++;
        }else{
          
            if(union[union.length-1]!=arr2[j]){
                 union.push(arr2[j]);
            }
            j++;
        }
    }

    while(i<n1){
         if(union[union.length-1]!=arr1[i]){
            union.push(arr1[i]);
            }
            i++; 
    }


     while(j<n2){
         if(union[union.length-1]!=arr2[j]){
            union.push(arr2[j]);
            }
            j++; 
    }

    return union
 
}

console.log(Union([1,1,2,3,4,5],[2,3,4,4,5]));

//t.c -> O(n1+n2)
//s.c->O(n1+n2)