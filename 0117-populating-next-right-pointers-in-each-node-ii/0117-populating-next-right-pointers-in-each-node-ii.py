"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

from collections import deque
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if root is None:
            return None
        
        q = deque()
        q.append((root, 1))

        while q:
            size = len(q)
            for _ in range(size):
                node, level = q.popleft()

                if not q:
                    node.next = None
                else:
                    node2, level_node2 = q[0]
                    if level == level_node2:
                        node.next = node2
                    else:
                        node.next = None
                
                if node.left:
                    q.append((node.left,level+1))
                
                if node.right:
                    q.append((node.right, level+1))
        
        return root