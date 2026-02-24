
import java.util.*;
class Main {
    public static void main(String[] args) {
      HashMap<Integer,Integer> map = new HashMap<>();
      
      map.put(1,1);
      map.put(2,20);
      
      System.out.println(map);
      System.out.println(map.get(1));
      System.out.println(map.remove(1));
       System.out.println(map);
       System.out.println(map.containsKey(2));
       map.put(1,1);
       map.put(3,20);
       System.out.println(map);
       
       //looping
       for(int key :map.keySet()){
            System.out.println(key+" "+map.get(key));
       }
       
    
    }
}