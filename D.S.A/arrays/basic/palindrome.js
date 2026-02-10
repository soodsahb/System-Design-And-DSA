function palindrome(n){
    let original=n;
    let lastdigit;
    let reverseNumber=0;
    while(n>0){ 

        lastdigit= n%10;
        reverseNumber=reverseNumber*10+lastdigit;
        n=Math.trunc(n/10);

        
    }

    return (original===reverseNumber);
}


console.log(palindrome(11));    