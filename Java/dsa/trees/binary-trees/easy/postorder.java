import java.util.ArrayList;
import java.util.List;

class PostorderTraversal {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> arr = new ArrayList<>();

        if (root == null) return arr;

        helper(root, arr);
        return arr;
    }

    public static void helper(TreeNode root, List<Integer> arr) {
        if (root == null) return;

        helper(root.left, arr);
        helper(root.right, arr);
        arr.add(root.val);
    }
}

// Explanation:
// - Traverse left subtree first.
// - Traverse right subtree second.
// - Visit current node at the end.
// - This gives Left -> Right -> Root order.

// Complexity:
// - Time: O(n), each node is visited once.
// - Space: O(h), recursion stack where h is tree height (O(n) worst case).
