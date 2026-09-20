# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def build_paths(self, root, maximum, minimum, difference, ans):
        if root is None:
            return
        
        maximum = max(maximum, root.val)
        minimum = min(minimum, root.val)

        difference = max(maximum - minimum, difference)

        if root.left is None and root.right is None:
            ans.append(difference)
            return

        self.build_paths(root.left,maximum,minimum, difference, ans)
        self.build_paths(root.right,maximum,minimum, difference, ans)
        return
    def maxAncestorDiff(self, root: TreeNode | None) -> int:
        ans = []
        self.build_paths(root, float("-inf"), float("inf"), 0, ans)
        return max(ans)