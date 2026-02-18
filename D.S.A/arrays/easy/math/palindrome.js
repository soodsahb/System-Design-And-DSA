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
// Explanation:
// - Keep a copy of original number.
// - Build reversed number digit by digit.
// - Take last digit with modulo operation.
// - Append digit to reverse using place shift.
// - Final check: original must equal reversed.


// Complexity:
// - Time: O(d) because every digit is processed once to build reverse.
// - Space: O(1) because only a few numeric variables are used.

