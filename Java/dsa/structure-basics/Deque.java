
import java.util.*;
class Main {
    public static void main(String[] args) {
      Deque<Integer> dq = new LinkedList<>();
      //adding
      dq.addFirst(10);
      dq.add(30);
      dq.addLast(20);
      //removing
      dq.removeFirst();
      dq.removeLast();
      
      //peeking
      dq.peekFirst();
      dq.peekLast();
      
      
      System.out.println(dq);
    
    }
}
