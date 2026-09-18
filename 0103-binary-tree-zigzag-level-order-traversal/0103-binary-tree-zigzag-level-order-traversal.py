# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def zigzagLevelOrder(self, root: TreeNode | None) -> list[list[int]]:
        if root is None:
            return []

        q = deque()
        i = 0
        ans = []

        q.append(root)

        while q:
            level = []
            size = len(q)

            for _ in range(size):
                elem = q.popleft()
                if elem and elem.left:
                    q.append(elem.left)
                
                if elem and elem.right:
                    q.append(elem.right)
                
                level.append(elem.val)
            
            if i & 1:
                level.reverse()
            ans.append(level)
            i+=1
        
        return ans