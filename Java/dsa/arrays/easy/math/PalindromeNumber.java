public class PalindromeNumber {
    public static boolean isPalindrome(int n) {
        int original = n;
        int reversed = 0;
        while (n > 0) {
            int last = n % 10;
            reversed = reversed * 10 + last;
            n /= 10;
        }
        return original == reversed;
    }
}
