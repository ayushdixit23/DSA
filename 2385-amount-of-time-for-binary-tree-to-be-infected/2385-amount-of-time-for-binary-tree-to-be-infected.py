# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def amountOfTime(self, root: TreeNode | None, start: int) -> int:
        node = None
        child_parent_map = {}
        q = deque()
        visited = {}
        time = 0

        q.append(root)
        child_parent_map[root] = None

        while q:
            elem = q.popleft()

            if elem.val == start:
                node = elem

            if elem.left:
                child_parent_map[elem.left] = elem
                q.append(elem.left)
            
            if elem.right:
                child_parent_map[elem.right] = elem
                q.append(elem.right)
        

        q.append(node)
        visited[node] = True

        while q:
            size = len(q)
            flag = False

            for _ in range(size):
                elem = q.popleft()

                parent = child_parent_map[elem]
                left = elem.left
                right = elem.right

                if parent and parent not in visited:
                    visited[parent] = True
                    q.append(parent)
                    flag = True
                
                if left and left not in visited:
                    visited[left] = True
                    q.append(left)
                    flag = True
                
                if right and right not in visited:
                    visited[right] = True
                    q.append(right)
                    flag = True
            
            if flag:
                time +=1
        
        return time
