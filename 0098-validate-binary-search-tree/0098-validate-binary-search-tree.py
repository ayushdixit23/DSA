# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self , root):
        if root is None:
            return
        if self.flag == False:
            return
        self.dfs(root.left)
        if self.temp >= root.val:
            self.flag = False
            return
        self.temp = root.val
        self.dfs(root.right)
        return
    def isValidBST(self, root: TreeNode | None) -> bool:
        self.temp = float("-inf")
        self.flag = True
        self.dfs(root)
        return self.flag