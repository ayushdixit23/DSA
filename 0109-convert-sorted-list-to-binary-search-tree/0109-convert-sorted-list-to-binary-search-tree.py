# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
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

    def sortedListToBST(self, head: ListNode | None) -> TreeNode | None:
        if head is None:
            return None

        nums = []
        while head:
            nums.append(head.val)
            head = head.next

        return self.helper(nums, 0 , len(nums)-1)