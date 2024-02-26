'''
Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
'''


class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:

        stack = [(p, q)]

        while stack:
            p, q = stack.pop()
            if not p and not q:
                continue

            if not p or not q:
                return False

            if p.val != q.val:
                return False

            stack.append((p.right, q.right))
            stack.append((p.left, q.left))

        return True

#! 9min 32sec
