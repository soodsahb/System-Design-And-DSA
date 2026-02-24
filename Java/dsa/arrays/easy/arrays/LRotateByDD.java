public class LRotateByDD {
    public static void leftRotateByD(int[] arr, int k) {
        int n = arr.length;
        int d = k % n;
        if (d == 0) {
            return;
        }
        reverse(arr, 0, d - 1);
        reverse(arr, d, n - 1);
        reverse(arr, 0, n - 1);
    }

    private static void reverse(int[] arr, int l, int r) {
        while (l < r) {
            int temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }
    }
}
