public class RightRotateByOne {
    public static int[] rightRotateByOne(int[] arr) {
        int n = arr.length;
        int last = arr[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            arr[i + 1] = arr[i];
        }
        arr[0] = last;
        return arr;
    }
}
