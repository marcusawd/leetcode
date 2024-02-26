'''
Count Good Nodes in Binary Tree
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
'''


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        count = 0

        stack = [(root, root.val)]

        while stack:
            node, maxVal = stack.pop()
            if node.val >= maxVal:
                count += 1
            maxVal = max(maxVal, node.val)

            if node.right:
                stack.append((node.right, maxVal))
            if node.left:
                stack.append((node.left, maxVal))
        return count
