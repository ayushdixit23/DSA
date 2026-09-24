# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root, hash_map, k):
        if root is None:
            return False
        
        result = self.dfs(root.left , hash_map, k)

        if result:
            return True

        value = k - root.val

        if value in hash_map:
            return True
        hash_map[root.val] = True
        return self.dfs(root.right , hash_map, k)

    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        hash_map = {}
        return self.dfs(root , hash_map,k)