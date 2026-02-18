function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}
  
console.log(bubbleSort([23, 1, 34, 11, 10])); 

//Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order, gradually pushing the largest elements to the end of the array.

// Time & Space Complexity

// Time Complexity:

// Best: O(n) (with optimization)

// Average & Worst: O(n²)

// Space Complexity: O(1)


// Explanation:
// - Compare adjacent elements repeatedly.
// - Swap whenever left element is greater.
// - After each pass, largest unsorted value bubbles right.
// - Reduce inner loop range on every pass.
// - Return sorted array in ascending order.


// Complexity:
// - Time: O(n^2) because nested loops compare adjacent pairs repeatedly.
// - Space: O(1) because sorting is done in-place.

