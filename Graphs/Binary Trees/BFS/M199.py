'''
Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

'''

# Question is actually asking for the right-most node of every level
# Append them from left to right, so when you popleft, the last item would be the right most
from collections import deque


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:

        queue = deque([root])
        ans = []

        if not root:
            return ans

        while queue:
            levelNodes = len(queue)

            while levelNodes:
                node = queue.popleft()
                levelNodes -= 1

                if levelNodes == 0:
                    ans.append(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return ans

#! 4min
