'''
Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
'''

#! Recursive


class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)
        return max(left, right) + 1

#! Iterative


class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        stack = [(root, 1)]
        ans = 0

        while stack:
            node, depth = stack.pop()
            ans = max(ans, depth)

            if node.right:
                stack.append((node.right, depth+1))
            if node.left:
                stack.append((node.left, depth+1))

        return ans
