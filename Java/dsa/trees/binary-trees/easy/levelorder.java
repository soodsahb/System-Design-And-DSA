import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class LevelOrderTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();

        if (root == null) return result;

        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            int levelSize = q.size();
            List<Integer> currentLevel = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = q.poll();

                currentLevel.add(node.val);

                if (node.left != null) q.add(node.left);
                if (node.right != null) q.add(node.right);
            }

            result.add(currentLevel);
        }

        return result;
    }
}

// Explanation:
// - Use a queue for breadth-first traversal.
// - For each loop, process exactly one level using current queue size.
// - Add node values to current level list.
// - Push children into queue for next level.

// Complexity:
// - Time: O(n), each node is enqueued/dequeued once.
// - Space: O(n), queue can hold a full level in the worst case.
