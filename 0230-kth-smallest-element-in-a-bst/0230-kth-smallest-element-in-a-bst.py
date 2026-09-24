# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root):
        if root is None:
            return None

        result = self.dfs(root.left)
        if result is not None:
            return result
        self.k -= 1
        if self.k == 0:
            return root.val
        return self.dfs(root.right)

    def kthSmallest(self, root: TreeNode | None, k: int) -> int:
        self.k = k
        return self.dfs(root)