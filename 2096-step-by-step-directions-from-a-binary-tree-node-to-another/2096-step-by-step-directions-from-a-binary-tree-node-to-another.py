# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def getDirections(self, root: TreeNode | None, startValue: int, destValue: int) -> str:
        node = None
        q = deque()
        child_parent_map = {}

        q.append(root)
        child_parent_map[root] = None

        while q:
            elem = q.popleft()

            if elem.val == startValue:
                node = elem

            if elem.left:
                q.append(elem.left)
                child_parent_map[elem.left] = elem
            
            if elem.right:
                q.append(elem.right)
                child_parent_map[elem.right] = elem
        
        visited = {}
        visited[node] = True
        q.append((node, ""))

        while q:
            elem,string = q.popleft()

            if elem.val == destValue:
                return string

            parent = child_parent_map[elem]
            left = elem.left
            right = elem.right

            if parent and parent not in visited:
                visited[parent] = True
                q.append((parent, string + "U"))
            
            if left and left not in visited:
                visited[left] = True
                q.append((left, string + "L"))

            if right and right not in visited:
                visited[right] = True
                q.append((right, string + "R"))
        
        return ""

            