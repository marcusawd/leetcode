'''
Maximum Difference Between Node and Ancestor

Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.
'''


class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        # Store highest number and lowest number encountered
        stack = [(root, root.val, root.val)]
        ans = 0

        while stack:
            node, highest, lowest = stack.pop()
            ans = max(ans, abs(highest-node.val), abs(lowest-node.val))
            highest = max(highest, node.val)
            lowest = min(lowest, node.val)

            if node.right:
                stack.append((node.right, highest, lowest))

            if node.left:
                stack.append((node.left, highest, lowest))

        return ans

#! 54min 52seconds (Really difficult one)
