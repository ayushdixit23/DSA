# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def build_paths(self, root, val, ans):
        if root is None:
            return
        
        val = val * 10 + root.val
        if root.left is None and root.right is None:
            ans.append(val)
            return

        self.build_paths(root.left, val, ans)
        self.build_paths(root.right, val, ans)
        return

    def sumNumbers(self, root: TreeNode | None) -> int:
        ans = []
        self.build_paths(root, 0, ans)
        return sum(ans)