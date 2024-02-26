'''
Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

'''

#! Trick question, finding the minDepth is faster using BFS not DFS
from collections import deque


class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        queue = deque()
        queue.append((root, 1))

        while queue:
            node, depth = queue.popleft()

            if not node.left and not node.right:
                return depth

            if node.right:
                queue.append((node.right, depth+1))
            if node.left:
                queue.append((node.left, depth+1))

#! 9min 18seconds
