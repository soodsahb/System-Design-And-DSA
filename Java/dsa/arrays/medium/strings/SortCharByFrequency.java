import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SortCharByFrequency {
    public static String frequencySort(String s) {
        Map<Character, Integer> map = new HashMap<>();
        for (char ch : s.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        List<List<Character>> buckets = new ArrayList<>();
        for (int i = 0; i <= s.length(); i++) {
            buckets.add(new ArrayList<>());
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            buckets.get(entry.getValue()).add(entry.getKey());
        }

        StringBuilder result = new StringBuilder();
        for (int i = buckets.size() - 1; i >= 0; i--) {
            for (char ch : buckets.get(i)) {
                result.append(String.valueOf(ch).repeat(i));
            }
        }
        return result.toString();
    }
}
