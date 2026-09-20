# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, node1, node2):
        if node1 is None and node2 is not None:
            return False

        if node1 is not None and node2 is None:
            return False
        
        if node1 is None and node2 is None:
            return True

        if node1.val != node2.val:
            return False
        
        return (self.isSameTree(node1.left, node2.left) and self.isSameTree(node1.right, node2.right))

    def isSubtree(self, root: TreeNode | None, subRoot: TreeNode | None) -> bool:
        if root is None:
            return False

        rootTree = self.isSameTree(root, subRoot)

        if rootTree:
            return True

        leftTree = self.isSubtree(root.left,subRoot)

        if leftTree:
            return True

        return self.isSubtree(root.right, subRoot)

        