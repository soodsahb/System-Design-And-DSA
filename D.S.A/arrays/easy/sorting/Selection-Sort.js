function SelectionSort(arr){

    for(let i=0;i<=arr.length-2;i++){
        let mini=i;
        for(let j=i;j<=arr.length-1;j++){
            
            if(arr[j]<arr[mini]){
                mini=j;
            }
        }
        [arr[mini],arr[i]]=[arr[i],arr[mini]]
    }

    return arr;
}

console.log(SelectionSort([23,1,34,11,10,-10]))


// Selection Sort – Explanation

// Selection Sort is a simple comparison-based sorting algorithm that works by dividing the array into two parts: a sorted section and an unsorted section.

// In each iteration, the algorithm finds the minimum element from the unsorted part of the array and swaps it with the element at the current index. This gradually grows the sorted section from left to right until the entire array is sorted.

// The algorithm performs the same number of comparisons regardless of the input order and sorts the array in place without using extra memory.

// Time Complexity: O(n²)
// Space Complexity: O(1)
// Stability: Not stable
// Explanation:
// - Treat left side as sorted and right side as unsorted.
// - Find minimum value in unsorted part.
// - Swap minimum with current index.
// - Move boundary one step right.
// - Repeat until array is sorted.


// Complexity:
// - Time: O(n^2) because each position scans remaining unsorted part for minimum.
// - Space: O(1) because it swaps in-place without extra arrays.

