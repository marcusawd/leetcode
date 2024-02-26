'''
Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

'''


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # dfs w levels for nodes p and q
        stack = [root]

        parent = {root: None}

        # Traverse to find p and q, and record their parents
        while p not in parent or q not in parent:
            node = stack.pop()

            if node.right:
                stack.append(node.right)
                parent[node.right] = node
            if node.left:
                stack.append(node.left)
                parent[node.left] = node

        # Collect ancestors of p
        ancestors = set()
        while p:
            ancestors.add(p)
            p = parent[p]

        # Traverse upwards from q until common ancestor is found
        while q not in ancestors:
            q = parent[q]

        return q  # Lowest common ancestor

#! 37mins 20sec
