# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: TreeNode | None) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if root is None or root.left is None and root.right is None:
            return root

        leftTree = self.flatten(root.left)
        rightTree = self.flatten(root.right)

        if leftTree:
            root.right = leftTree
        
        root.left = None

        while leftTree and leftTree.right:
            leftTree = leftTree.right
        
        if leftTree:
            leftTree.right = rightTree
        else:
            root.right = rightTree
            
        return root