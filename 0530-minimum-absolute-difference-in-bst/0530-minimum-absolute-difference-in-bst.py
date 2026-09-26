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

        if self.prev is not None:
            difference = abs(root.val - self.prev)
            self.diff = min(self.diff,difference)
        
        self.prev = root.val

        self.dfs(root.right)
        return
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        self.diff = float("inf")
        self.prev = None
        self.dfs(root)
        return self.diff