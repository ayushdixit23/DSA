# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
from collections import defaultdict
class Solution:
    def verticalTraversal(self, root: TreeNode | None) -> list[list[int]]:
        q = deque()
        hash_map = {}
        ans = []

        q.append((root, (0, 0)))

        while q:
            node, pair = q.popleft()
            (line,level) = pair

            if node.left:
                q.append((node.left, (line-1, level+1)))

            if node.right:
                q.append((node.right, (line+1, level+1)))
            
            if pair in hash_map:
                hash_map[pair].append(node.val)
            else:
                hash_map[pair] = [node.val]
        
        sorted_hash_map = dict(sorted(hash_map.items()))
        grouped = defaultdict(list)

        for (x, y), value in sorted_hash_map.items():
            if len(value) > 1:
                value.sort()

            grouped[x].append((y, value))

        for x in grouped:
            grouped[x].sort(key=lambda item: item[0])

        hash_map = dict(grouped)
        
        for key, value in hash_map.items():
            length =  len(value)
            if length > 1:
                temp = []
                for i in range(length):
                    temp += value[i][1]
                
                ans.append(temp)
            else:
                ans.append(value[0][1])

        return ans