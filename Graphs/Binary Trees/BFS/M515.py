'''
Find Largest value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
'''
from collections import deque


class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        if not root:
            return ans

        queue = deque()
        queue.append(root)

        while queue:
            levelNodes = len(queue)
            maxVal = float("-inf")

            for _ in range(levelNodes):
                node = queue.popleft()
                maxVal = max(maxVal, node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            ans.append(maxVal)

        return ans

#! 10min 21seconds
