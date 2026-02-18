function isPrime(n){

    if(n<=1) return false;

    if(n===2) return true;

    if(n%2===0) return false;


    for( let i=3;i*i<=n;i+=2){
        if(n%i===0) return false;
    }

    return true;
}


console.log(isPrime(8));
// Explanation:
// - Handle small edge cases (`<=1`, `2`, even numbers).
// - Test divisibility only by odd numbers.
// - Iterate up to square root of `n`.
// - If any divisor found, number is not prime.
// - If loop ends, number is prime.


// Complexity:
// - Time: O(sqrt(n)) because divisors are checked only up to square root.
// - Space: O(1) because only loop variables are used.

