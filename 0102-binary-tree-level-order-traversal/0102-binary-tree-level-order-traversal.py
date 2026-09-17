# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque 
class Solution:
    def levelOrder(self, root: TreeNode | None) -> list[list[int]]:
        if root is None:
            return []

        q = deque()
        ans = []
        sub_ans = []
        currLevel = 0

        q.append((root,0))

        while q:
            elem,level = q.popleft()

            if elem and elem.left:
                q.append((elem.left, level+1))
            
            if elem and elem.right:
                q.append((elem.right, level+1))
            
            if level == currLevel:
                sub_ans.append(elem.val)
            else:
                ans.append(sub_ans)
                sub_ans = []
                sub_ans.append(elem.val)
                currLevel = level
        
        ans.append(sub_ans)
        return ans