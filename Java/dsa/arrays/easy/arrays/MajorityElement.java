public class MajorityElement {
    public static int majorityElement(int[] arr) {
        int count = 0;
        int ele = -1;
        for (int num : arr) {
            if (count == 0) {
                ele = num;
                count = 1;
            } else if (num == ele) {
                count++;
            } else {
                count--;
            }
        }
        return ele;
    }
}
