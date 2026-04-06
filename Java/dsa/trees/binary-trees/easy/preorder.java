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
class PreorderTraversal {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> arr = new ArrayList<>();

        if (root == null) return arr;

        helper(root, arr);
        return arr;
    }

    public static void helper(TreeNode root, List<Integer> arr) {
        if (root == null) return;

        arr.add(root.val);
        helper(root.left, arr);
        helper(root.right, arr);
    }
}

// Explanation:
// - Visit current node first.
// - Then traverse left subtree.
// - Finally traverse right subtree.
// - This gives Root -> Left -> Right order.

// Complexity:
// - Time: O(n), each node is processed once.
// - Space: O(h), recursion stack where h is tree height (O(n) worst case).
