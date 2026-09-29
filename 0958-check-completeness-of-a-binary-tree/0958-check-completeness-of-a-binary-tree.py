# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root):
        if root is None:
            return 0
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)

    def dfs(self, root, number):
        if root is None:
            return True
        if number > self.nodes:
            return False

        return self.dfs(root.left, (2 * number)) and self.dfs(
            root.right, (2 * number) + 1
        )

    def isCompleteTree(self, root: TreeNode | None) -> bool:
        self.nodes = self.countNodes(root)

        return self.dfs(root, 1)
