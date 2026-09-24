# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def deepestLeavesSum(self, root: TreeNode | None) -> int:
        q = deque()
        total_sum = 0
        q.append(root)

        while q:
            size = len(q)
            sum = 0
            for _ in range(size):
                node = q.popleft()
                sum += node.val

                if node.left:
                    q.append(node.left)
                
                if node.right:
                    q.append(node.right)
            
            total_sum = sum
        
        return total_sum