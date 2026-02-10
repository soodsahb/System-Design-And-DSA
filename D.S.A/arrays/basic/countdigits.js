function countDigits(n){

    let count=0;

    while(n>0){

        count++;

        n=Math.trunc(n/10);
    }

    return count;
}

console.log(countDigits(7));