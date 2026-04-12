/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode slow=head;
        ListNode fast=head;

        if(head==null||head.next==null) return true;

        while(fast!=null&&fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }

        ListNode temp= slow;
        ListNode prev=null;
        ListNode front=temp;

        while(temp!=null){
           front=temp.next;
           temp.next=prev;
           prev=temp;
           temp=front;
        }

        slow=head;
        while(prev!=null){
            if(slow.val!=prev.val){
                return false;
            }
            slow=slow.next;
            prev=prev.next;
        }

        return true;


       
    }
}