'''
Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
'''

#! Iterative


class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return 0

        stack = [(root, root.val)]

        while stack:
            node, acc = stack.pop()
            if not node.right and not node.left and acc == targetSum:
                return True
            if node.right:
                stack.append((node.right, node.right.val + acc))
            if node.left:
                stack.append((node.left, node.left.val + acc))
        return False
