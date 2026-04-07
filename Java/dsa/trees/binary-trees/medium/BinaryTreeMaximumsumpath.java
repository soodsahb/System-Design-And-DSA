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
class BinaryTreeMaximumSumPath {
    private int max = -3434;

    public int maxPathSum(TreeNode root) {
        if (root.left == null && root.right == null) return root.val;
        helper(root);
        return max;
    }

    public int helper(TreeNode root) {
        if (root == null) return 0;

        int lh = Math.max(0, helper(root.left));
        int rh = Math.max(0, helper(root.right));

        max = Math.max(max, root.val + lh + rh);
        return root.val + Math.max(lh, rh);
    }
}

// Explanation:
// - For each node, compute best downward path from left and right subtrees.
// - Ignore negative contributions using Math.max(0, subtreeGain).
// - Candidate answer through current node is root.val + leftGain + rightGain.
// - Track global maximum path sum and return best single-branch gain upward.

// Complexity:
// - Time: O(n), each node is processed once.
// - Space: O(h), recursion stack where h is tree height.
