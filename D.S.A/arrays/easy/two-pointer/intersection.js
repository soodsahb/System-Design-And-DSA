function Intersection(arr1,arr2){

    let n1=arr1.length;
    let n2=arr2.length;

    let intersection=[];

    let i=0;
    let j=0;

    while(i<n1&&j<n2){

        if(arr1[i]!==arr2[j]){
            i++;
        }else{
            if(intersection[intersection.length-1]!==arr1[i]){
                intersection.push(arr1[i]);
                i++;
                j++;
            }else{
                i++;
                j++;
            }
        }
    }

    return intersection;
}


console.log(Intersection([1,2,2,3,3,4,5,6],[2,3,3,5,6,6,7]))
// Explanation:
// - Use two pointers on sorted arrays.
// - Compare current elements to find matches.
// - On match, add once to avoid duplicates.
// - Move pointers forward based on comparison.
// - Return collected intersection array.


// Complexity:
// - Time: O(n1 + n2) because two pointers move forward across both arrays once.
// - Space: O(min(n1,n2)) for the output intersection list.

