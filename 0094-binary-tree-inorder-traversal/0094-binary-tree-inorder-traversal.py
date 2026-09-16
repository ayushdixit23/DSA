# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recursion(self, root, arr):
        if root is None:
            return

        self.recursion(root.left, arr)
        arr.append(root.val)
        self.recursion(root.right, arr)
        return

    def inorderTraversal(self, root: TreeNode | None) -> list[int]:
        arr = []
        self.recursion(root, arr)
        return arr
