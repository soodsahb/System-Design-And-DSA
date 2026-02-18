function secondLargest(arr){

    let max=-42422423;
    let secondMax=-3131412312;

    for(let i=0;i<arr.length;i++){
      
        if(arr[i]>max){
           
            secondMax=max;
            max=arr[i];
        }
    }

    return {
        max,
        secondMax
    }


}

console.log(secondLargest([11,22,33,44,55,66]))

//just iterate over the array as soon as we find new max previous max becomes secondMax or secondLargest
// Explanation:
// - Track largest and second largest values.
// - Traverse each element once.
// - If current is greater than max, shift max to second max.
// - Update max with current value.
// - Return both max and secondMax.


// Complexity:
// - Time: O(n) because we find max and second max in a single pass.
// - Space: O(1) because only two tracking variables are maintained.

