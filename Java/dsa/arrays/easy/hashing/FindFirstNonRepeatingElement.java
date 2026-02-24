import java.util.LinkedHashMap;
import java.util.Map;

public class FindFirstNonRepeatingElement {
    public static Integer firstNonRepeating(int[] arr) {
        Map<Integer, Integer> map = new LinkedHashMap<>();
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        return null;
    }
}
