'''
Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
'''
from collections import deque


class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        ans = []
        if not root:
            return ans

        queue = deque([root])
        leftToRight = True

        while queue:
            levelLength = len(queue)
            levelArr = deque()

            for _ in range(levelLength):
                node = queue.popleft()
                if leftToRight:
                    levelArr.append(node.val)
                else:
                    levelArr.appendleft(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            leftToRight = not leftToRight
            ans.append(levelArr)

        return ans


#! 6min 41seconds
