//example 371 = 3^3 + 7^3+1^3 =371 this is armstrong number



function armstrong(n){
     
    let original=n;
    let lastdigit;
    let result=0;
    let length=n.toString().length;

    console.log('This is number length',length)
   
    while(n>0){

       lastdigit= n%10;
       result+=Math.pow(lastdigit,length)
       
        n=Math.trunc(n/10);

        
    }
     console.log(result);
    
    return result===original;
}


console.log(armstrong(371));    