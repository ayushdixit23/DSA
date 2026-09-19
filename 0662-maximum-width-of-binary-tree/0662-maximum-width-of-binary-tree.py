# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def widthOfBinaryTree(self, root: TreeNode | None) -> int:
        q = deque()
        maxWidth = 0

        q.append((root,0))

        while q:
            level_size = len(q)
            offset = q[0][1]
            first = last = 0

            for _ in range(len(q)):
                elem, id = q.popleft()
                id -= offset

                if _ == 0:
                    first = id

                if _ == level_size - 1:
                    last = id

                if elem.left:
                    q.append((elem.left,2*id+1))
                if elem.right:
                    q.append((elem.right,2*id+2))
            
            maxWidth = max(maxWidth,(last - first + 1))
        return maxWidth