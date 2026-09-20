# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, node):
        if node is None:
            return 0
        leftSum = max(0, self.dfs(node.left))
        rightSum = max(0, self.dfs(node.right))

        currentSum = leftSum + node.val + rightSum

        self.maximum = max(self.maximum, currentSum)

        return node.val + max(leftSum, rightSum)

    def maxPathSum(self, root: TreeNode | None) -> int:
        self.maximum = float("-inf")
        self.dfs(root)
        return self.maximum