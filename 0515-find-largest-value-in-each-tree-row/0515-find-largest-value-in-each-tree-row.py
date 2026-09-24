# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def largestValues(self, root: TreeNode | None) -> list[int]:
        if root is None:
            return []
        q = deque()
        ans = []
        q.append(root)

        while q:
            size = len(q)
            maxELem = float("-inf")
            for _ in range(size):
                node = q.popleft()
                maxELem = max(maxELem, node.val)

                if node.left:
                    q.append(node.left)
                
                if node.right:
                    q.append(node.right)
            
            ans.append(maxELem)
        
        return ans