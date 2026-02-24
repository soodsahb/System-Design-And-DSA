import java.util.HashMap;
import java.util.Map;

public class CountDigitsFrequency {
    public static Map<Integer, Integer> countFrequency(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return map;
    }
}
