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
class MaximumDepthBinaryTree {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        int lh = maxDepth(root.left);
        int rh = maxDepth(root.right);

        return 1 + Math.max(lh, rh);
    }
}

// Explanation:
// - Depth of an empty node is 0.
// - Recursively compute depth of left and right subtrees.
// - Current node depth is 1 + max(leftDepth, rightDepth).

// Complexity:
// - Time: O(n), every node is visited once.
// - Space: O(h), recursion stack where h is tree height (O(n) worst case).
