public class BinarySubarrayWithSum {
    public static int numSubarraysWithSum(int[] nums, int goal) {
        return atMost(nums, goal) - atMost(nums, goal - 1);
    }

    private static int atMost(int[] nums, int k) {
        if (k < 0) {
            return 0;
        }
        int l = 0;
        int sum = 0;
        int count = 0;

        for (int r = 0; r < nums.length; r++) {
            sum += nums[r];
            while (sum > k) {
                sum -= nums[l++];
            }
            count += r - l + 1;
        }

        return count;
    }
}
