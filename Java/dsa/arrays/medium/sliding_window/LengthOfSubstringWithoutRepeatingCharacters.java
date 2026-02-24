import java.util.HashMap;
import java.util.Map;

public class LengthOfSubstringWithoutRepeatingCharacters {
    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int i = 0;
        int maxLen = 0;

        for (int j = 0; j < s.length(); j++) {
            char ch = s.charAt(j);
            if (map.containsKey(ch) && map.get(ch) >= i) {
                i = map.get(ch) + 1;
            }
            map.put(ch, j);
            maxLen = Math.max(maxLen, j - i + 1);
        }

        return maxLen;
    }
}
