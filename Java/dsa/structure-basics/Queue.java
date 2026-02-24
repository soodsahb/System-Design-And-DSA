import java.util.*;
class Main {
    public static void main(String[] args) {
      Queue<Integer> q = new LinkedList<>();
      q.add(10);
      q.add(20);
      
      System.out.println(q);
      q.poll();
       System.out.println(q);
       System.out.println(q.peek()); 
       System.out.println(q.isEmpty());  
    }
}