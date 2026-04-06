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
class BalancedBinaryTree {
    public boolean isBalanced(TreeNode root) {
        int value = helper(root);

        if (value < 0) {
            return false;
        }
        return true;
    }

    public static int helper(TreeNode root) {
        if (root == null) return 0;

        int lh = helper(root.left);
        if (lh == -1) return -1;

        int rh = helper(root.right);
        if (rh == -1) return -1;

        if (Math.abs(lh - rh) > 1) return -1;

        return 1 + Math.max(lh, rh);
    }
}

// Explanation:
// - Compute subtree height recursively.
// - If any subtree is already unbalanced, return -1 immediately.
// - If current node has left/right height difference > 1, return -1.
// - Otherwise return normal height, 1 + max(leftHeight, rightHeight).
// - Final answer is balanced when helper(root) is not -1.

// Complexity:
// - Time: O(n), each node is visited once.
// - Space: O(h), recursion stack where h is tree height (O(n) worst case).
