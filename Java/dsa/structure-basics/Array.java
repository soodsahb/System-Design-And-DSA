
import java.util.*;
class Main {
    public static void main(String[] args) {
       ArrayList<Integer> list = new ArrayList<>();
       //add
       list.add(10);
       list.add(20);
       list.add(30);
       //access
       System.out.println(list.get(list.size()-1));
       
       //update
       list.set(2,100);
       System.out.println(list.get(2));
        
        //remove
        
        list.remove(0);
        System.out.println(list);
        //size
        System.out.println(list.size());
        
        //contains
        System.out.println(list.contains(100));
        
    }
}