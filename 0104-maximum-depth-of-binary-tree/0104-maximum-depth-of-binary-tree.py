# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def height(self, root):
        if (root is None) or (root.left is None and root.right is None):
            return 0
        return 1 + max(self.height(root.left) ,  self.height(root.right))
    def maxDepth(self, root: TreeNode | None) -> int:
        if root is None:
            return 0
        return 1 + self.height(root)