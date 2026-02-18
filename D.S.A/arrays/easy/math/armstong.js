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
// Explanation:
// - Store original number and count total digits.
// - Extract each digit using modulo (`n % 10`).
// - Add `digit^length` to running sum.
// - Remove last digit using integer division.
// - Compare computed sum with original number.


// Complexity:
// - Time: O(d) because we process each digit once (`d` = number of digits).
// - Space: O(1) because only fixed variables are used.

