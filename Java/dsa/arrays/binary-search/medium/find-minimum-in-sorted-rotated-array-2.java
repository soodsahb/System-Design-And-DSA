class FindMinimumInSortedRotatedArrayWithDuplicates {
    public int findMin(int[] nums) {
        int low = 0;
        int high = nums.length - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] > nums[high]) {
                low = mid + 1;
            } else if (nums[mid] < nums[high]) {
                high = mid;
            } else {
                high--;
            }
        }

        return nums[low];
    }
}

// Explanation:
// - Use binary search with low and high pointers.
// - If nums[mid] > nums[high], minimum must be on the right.
// - If nums[mid] < nums[high], minimum is at mid or on the left.
// - If nums[mid] == nums[high], we cannot decide side safely, so shrink high by one.
// - Loop ends when low == high, which is the minimum index.

// Complexity:
// - Time: Average O(log n), worst O(n) when many duplicates force high-- repeatedly.
// - Space: O(1), only pointer variables are used.
