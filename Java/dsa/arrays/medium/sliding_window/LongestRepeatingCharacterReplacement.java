import java.util.HashMap;
import java.util.Map;

public class LongestRepeatingCharacterReplacement {
    public static int characterReplacement(String s, int k) {
        Map<Character, Integer> map = new HashMap<>();
        int l = 0;
        int maxFreq = 0;
        int maxLen = 0;

        for (int r = 0; r < s.length(); r++) {
            char ch = s.charAt(r);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(ch));

            while ((r - l + 1) - maxFreq > k) {
                char left = s.charAt(l);
                map.put(left, map.get(left) - 1);
                l++;
            }

            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;
    }
}
