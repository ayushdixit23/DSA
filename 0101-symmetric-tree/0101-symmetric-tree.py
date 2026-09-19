# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode | None, q: TreeNode | None) -> bool:
        if p is None and q is not None:
            return False
        
        if p is not None and q is None:
            return False

        if p is None and q is None:
            return True

        if p.val != q.val:
            return False
        
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
    
    def invert(self, root):
        if root is None:
            return
        temp = root.left
        root.left = root.right
        root.right = temp

        self.invert(root.left)
        self.invert(root.right)

    def invertTree(self, root: TreeNode | None) -> TreeNode | None:
        self.invert(root)
        return root

    def isSymmetric(self, root: TreeNode | None) -> bool:
        leftTree = self.invertTree(root.left)
        return self.isSameTree(leftTree, root.right)