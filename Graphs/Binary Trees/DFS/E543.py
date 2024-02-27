'''
Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
'''


class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Calculate from the bottom of the tree
        stack = [(root, False)]
        heights = {}
        maxDia = 0

        while stack:
            node, visited = stack.pop()

            if visited:
                left = heights.get(node.left, 0)
                right = heights.get(node.right, 0)
                dia = left + right
                maxDia = max(maxDia, dia)
                heights[node] = max(left, right) + 1

            else:
                stack.append((node, True))

                if node.right:
                    stack.append((node.right, False))
                if node.left:
                    stack.append((node.left, False))

        return maxDia


# You can also dynamically add variables .depth to the TreeNode class to store its depth there instead.
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Calculate from the bottom of the tree
        stack = [(root, False)]
        maxDia = 0

        while stack:
            node, visited = stack.pop()

            if visited:
                left = node.left.depth if node.left else 0
                right = node.right.depth if node.right else 0
                maxDia = max(maxDia, left + right)
                node.depth = max(left, right) + 1

            else:
                stack.append((node, True))

                if node.right:
                    stack.append((node.right, False))
                if node.left:
                    stack.append((node.left, False))

        return maxDia


#! 35mins. Not easy!!
