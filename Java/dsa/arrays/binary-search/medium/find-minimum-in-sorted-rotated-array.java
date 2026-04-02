class FindMinimumInSortedRotatedArray {
    public int findMin(int[] nums) {
        int low = 0;
        int high = nums.length - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return nums[low];
    }
}

// Explanation:
// - Keep search space between low and high.
// - If nums[mid] > nums[high], minimum is on the right side, so move low = mid + 1.
// - Otherwise minimum is at mid or on the left side, so move high = mid.
// - When low == high, that index is the minimum element.

// Complexity:
// - Time: O(log n), binary search halves the range each step.
// - Space: O(1), only pointers are used.
