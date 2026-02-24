public class Kadane {
    public static int maxSubarraySum(int[] arr) {
        int maximum = arr[0];
        int sum = 0;
        for (int num : arr) {
            sum += num;
            maximum = Math.max(maximum, sum);
            if (sum < 0) {
                sum = 0;
            }
        }
        return maximum;
    }
}
