# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def maxLevelSum(self, root: TreeNode | None) -> int:
        q = deque()

        maxSum = float("-inf")
        maxLevel = None

        q.append((root, 1))

        while q:
            size = len(q)
            curr_sum = 0
            level = q[0][1]
            for _ in range(size):
                node,curr_level = q.popleft()

                if node.left:
                    q.append((node.left, curr_level+1))
                
                if node.right:
                    q.append((node.right, curr_level+1))

                curr_sum += node.val
            
            if curr_sum > maxSum:
                maxSum = curr_sum
                maxLevel = level
        
        return maxLevel