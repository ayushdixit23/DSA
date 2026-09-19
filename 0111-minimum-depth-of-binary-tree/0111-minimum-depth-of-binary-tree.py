# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque


class Solution:
    def minDepth(self, root: TreeNode | None) -> int:
        if root is None:
            return 0
        level = 1

        q = deque()
        q.append(root)

        while q:
            for _ in range(len(q)):
                elem = q.popleft()
                if (elem.left is None) and (elem.right is None):
                    return level

                if elem.left:
                    q.append(elem.left)

                if elem.right:
                    q.append(elem.right)

            level += 1

        return level
