import java.util.ArrayList;
import java.util.List;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class InorderTraversal {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> arr = new ArrayList<>();
        helper(root, arr);

        return arr;
    }

    public static void helper(TreeNode root, List<Integer> arr) {
        if (root == null) return;

        helper(root.left, arr);
        arr.add(root.val);
        helper(root.right, arr);
    }
}

// Explanation:
// - Traverse left subtree first.
// - Visit current node and add its value.
// - Traverse right subtree.
// - This gives Left -> Root -> Right order.

// Complexity:
// - Time: O(n), each node is visited once.
// - Space: O(h), recursion stack where h is tree height (O(n) in worst case).
