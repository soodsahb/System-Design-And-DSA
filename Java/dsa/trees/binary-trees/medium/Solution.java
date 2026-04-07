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
class DiameterOfBinaryTree {
    private int max;

    public int diameterOfBinaryTree(TreeNode root) {
        max = 0;
        helper(root);
        return max;
    }

    public int helper(TreeNode root) {
        if (root == null) return 0;

        int lh = helper(root.left);
        int rh = helper(root.right);

        max = Math.max(max, lh + rh);
        return 1 + Math.max(lh, rh);
    }
}

// Explanation:
// - Recursively compute height of left and right subtree for each node.
// - Path length through current node is leftHeight + rightHeight.
// - Keep global maximum of this value as the diameter.
// - Return node height to parent as 1 + max(leftHeight, rightHeight).

// Complexity:
// - Time: O(n), each node is visited once.
// - Space: O(h), recursion stack where h is tree height.
