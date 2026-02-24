public class ReverseNumber {
    public static int reverseNumber(int n) {
        int reversed = 0;
        while (n > 0) {
            int last = n % 10;
            reversed = reversed * 10 + last;
            n /= 10;
        }
        return reversed;
    }
}
