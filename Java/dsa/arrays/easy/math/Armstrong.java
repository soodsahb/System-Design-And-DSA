public class Armstrong {
    public static boolean isArmstrong(int n) {
        int original = n;
        int digits = String.valueOf(n).length();
        int result = 0;
        while (n > 0) {
            int last = n % 10;
            result += (int) Math.pow(last, digits);
            n /= 10;
        }
        return result == original;
    }
}
