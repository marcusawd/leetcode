'''
Deepest Leaves Sum

Given the root of a binary tree, return the sum of values of its deepest leaves.
'''
# Use a hashmap to store each layer and its values. Use a counter to count level
from collections import deque


class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        counter = 0
        levelMap = {}

        queue = deque([root])

        while queue:
            levelNodes = len(queue)
            counter += 1
            levelMap[counter] = []

            for _ in range(levelNodes):
                node = queue.popleft()
                currentLevel = levelMap[counter]
                currentLevel.append(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        ans = 0
        bottomLayer = levelMap[counter]
        for num in bottomLayer:
            ans += num

        return ans

#! 5min 45seconds


class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        queue = deque([root])
        deepestSum = 0

        while queue:
            levelNodes = len(queue)
            levelSum = 0

            for _ in range(levelNodes):
                node = queue.popleft()
                levelSum += node.val

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            deepestSum = levelSum

        return deepestSum
