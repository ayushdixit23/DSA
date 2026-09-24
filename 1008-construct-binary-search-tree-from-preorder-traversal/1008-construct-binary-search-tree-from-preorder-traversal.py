# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insert(self, root, value):
        if root.val < value:
            if root.right is None:
                root.right = TreeNode(value)
            else:
                self.insert(root.right, value)
        else:
            if root.left is None:
                root.left = TreeNode(value)
            else:
                self.insert(root.left, value)
        return root
    def bstFromPreorder(self, preorder: list[int]) -> TreeNode | None:
        n = len(preorder)
        root = TreeNode(preorder[0])
        for i in range(1, n):
            root = self.insert(root, preorder[i])
        return root