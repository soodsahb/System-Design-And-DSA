public class ReverseStringWords {
    public static String reverseWords(String s) {
        String[] parts = s.trim().split("\\s+");
        StringBuilder ans = new StringBuilder();
        for (int i = parts.length - 1; i >= 0; i--) {
            ans.append(parts[i]);
            if (i != 0) {
                ans.append(' ');
            }
        }
        return ans.toString();
    }
}
