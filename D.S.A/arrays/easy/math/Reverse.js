function reverseNumber(n){

    let lastdigit;
    let reverseNumber=0;
    while(n>0){

       lastdigit= n%10;
        reverseNumber=reverseNumber*10+lastdigit;
        n=Math.trunc(n/10);

        
    }

    return reverseNumber;
}


console.log(reverseNumber(3244));    
// Explanation:
// - Start with reversed value as 0.
// - Extract last digit from number.
// - Shift reversed number and append digit.
// - Drop processed digit from original number.
// - Return fully reversed number.


// Complexity:
// - Time: O(d) because each digit is extracted once.
// - Space: O(1) because reverse is built using constant extra variables.

