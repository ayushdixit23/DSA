# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode | None) -> int:
        if root is None:
            return 0

        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

    def isBalanced(self, root: TreeNode | None) -> bool:
        if root is None:
            return True
        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)

        if abs(right - left) > 1:
            return False

        return self.isBalanced(root.left) and self.isBalanced(root.right)
