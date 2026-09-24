# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def helper(self,nums, low , high):
        if low > high:
            return None
        
        mid = (low + high) // 2
        root = TreeNode(nums[mid])
        root.left = self.helper(nums, low, mid - 1)
        root.right = self.helper(nums, mid+1, high)
        return root

    def sortedArrayToBST(self, nums: list[int]) -> TreeNode | None:
        return self.helper(nums, 0 , len(nums)-1)