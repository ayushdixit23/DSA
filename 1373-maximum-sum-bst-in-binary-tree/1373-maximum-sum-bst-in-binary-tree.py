# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, node):
        if node is None:
            return True, float("inf"), float("-inf"), 0

        leftBST, leftMin, leftMax, leftSum = self.dfs(node.left)
        rightBST, rightMin, rightMax, rightSum = self.dfs(node.right)

        if (
            leftBST
            and rightBST
            and leftMax < node.val < rightMin
        ):
            currSum = leftSum + node.val + rightSum

            self.maxSum = max(self.maxSum, currSum)

            currMin = min(leftMin, node.val)
            currMax = max(rightMax, node.val)

            return True, currMin, currMax, currSum

        return False, 0, 0, 0
        
    def maxSumBST(self, root: TreeNode | None) -> int:
        self.maxSum = 0

        self.dfs(root)
        return self.maxSum