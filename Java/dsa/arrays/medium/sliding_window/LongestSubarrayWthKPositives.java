public class LongestSubarrayWthKPositives {
    public static int longestSubarray(int[] arr, int k) {
        int i = 0;
        int sum = 0;
        int maxLength = 0;

        for (int j = 0; j < arr.length; j++) {
            sum += arr[j];
            while (sum > k) {
                sum -= arr[i++];
            }
            if (sum == k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }

        return maxLength;
    }
}
