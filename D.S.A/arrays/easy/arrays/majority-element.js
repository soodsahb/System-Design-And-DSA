//moore voting algorithm


function majorityElement(arr){
        let count=0;
        let ele=-1;
    for(let i=0;i<arr.length;i++){
        

        if(count===0){
            ele=arr[i];
            count=1;
        }else if(ele===arr[i]){
            count++;
        }else{
            count--;
        }
    }

    return ele

}

console.log(majorityElement([7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,7,7,7,7,7,7]))
// Explanation:
// - Use Moore Voting with `count` and candidate `ele`.
// - When count is 0, pick current element as candidate.
// - Same element increases count.
// - Different element decreases count.
// - Final candidate is the majority element.


// Complexity:
// - Time: O(n) because Moore Voting uses one pass through the array.
// - Space: O(1) because only candidate and count are tracked.

