let arr=[1,1,2,2,3];

let map = new Map();
for(let num of arr){


    map.set(num,(map.get(num)||0)+1)
}

for(let [key,value] of map){
    if(value===1){
        console.log(key);
        break;
    }
}
// Explanation:
// - Build frequency map for all elements.
// - Traverse map entries in insertion order.
// - Find first key with frequency 1.
// - Print and stop at first non-repeating element.
// - Two-pass hashing gives linear complexity.


// Complexity:
// - Time: O(n) because we do one pass to count and one pass over entries, both linear.
// - Space: O(u) because frequency map stores unique elements.

