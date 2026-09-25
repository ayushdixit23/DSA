# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root):
        if root is None:
            return 
        self.dfs(root.left)

        if self.prev is not None and root.val < self.prev:
            if self.first is None:
                self.first = self.prev
            self.second = root.val
        
        self.prev = root.val
        self.dfs(root.right)
        return

    def swapdfs(self, root, firstValue, secondValue):
        if root is None:
            return 
        self.swapdfs(root.left, firstValue, secondValue)

        if root.val == firstValue:
            root.val = secondValue
        elif root.val == secondValue:
            root.val = firstValue

        self.swapdfs(root.right, firstValue, secondValue)
        return

    def recoverTree(self, root: TreeNode | None) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        self.prev = None
        self.first = None
        self.second = None

        self.dfs(root)

        self.swapdfs(root, self.first, self.second)

        return root