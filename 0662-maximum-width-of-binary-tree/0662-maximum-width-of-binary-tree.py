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
            maximum = float("-inf")
            minimum = float("inf")
            for _ in range(len(q)):
                elem, id = q.popleft()
                maximum = max(id , maximum)
                minimum = min(id , minimum)

                if elem.left:
                    q.append((elem.left,2*id+1))
                if elem.right:
                    q.append((elem.right,2*id+2))
            
            maxWidth = max(maxWidth,(maximum - minimum + 1))
        return maxWidth