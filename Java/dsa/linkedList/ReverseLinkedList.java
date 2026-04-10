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
    public ListNode reverseList(ListNode head) {
        if (head == null) {
            return head;
        }

        ListNode curr = head;
        ListNode prev = null;
        ListNode front = head;

        while (curr != null) {
            front = curr.next;
            curr.next = prev;
            prev = curr;
            curr = front;
        }

        return prev;
    }
}

/*
Explanation:
1) Iterate through the list and reverse each node's next pointer.
2) Keep track of previous, current, and next (front) nodes.
3) At the end, prev becomes the new head of the reversed list.
*/
