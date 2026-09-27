"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def dfs(self, root, arr):
        if root is None:
            return
        
        arr.append(root.val)
        for child in root.children:
            self.dfs(child, arr)

    def preorder(self, root: 'Node') -> List[int]:
        arr = []
        self.dfs(root, arr)
        return arr