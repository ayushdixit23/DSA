# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: TreeNode | None) -> list[int]:
        if root is None:
            return []

        q = deque()
        ans = []

        q.append(root)

        while q:
            level = []
            size = len(q)

            for _ in range(size):
                elem = q.popleft()
                if elem.right:
                    q.append(elem.right)

                if elem.left:
                    q.append(elem.left)
                
                level.append(elem.val)
        
            ans.append(level[0])
        
        return ans       