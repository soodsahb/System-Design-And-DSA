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
class SameTree {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null || q == null) {
            return (p == q);
        }

        return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}

// Explanation:
// - If one node is null, both must be null to be equal.
// - Current nodes must have the same value.
// - Left subtrees must match and right subtrees must match recursively.
// - Final result is true only when all corresponding nodes are equal.

// Complexity:
// - Time: O(n), every node is compared once.
// - Space: O(h), recursion stack where h is tree height.
