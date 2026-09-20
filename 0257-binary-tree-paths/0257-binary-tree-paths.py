# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def build_path(self, root, string,arr):
        if root is None:
            return

        if root.left is None and root.right is None:
            string += str(root.val)
            arr.append(string)
            return
        
        string += str(root.val) + "->"
        self.build_path(root.left, string , arr)
        self.build_path(root.right, string , arr)
        return

    def binaryTreePaths(self, root: TreeNode | None) -> list[str]:
        string = ""
        arr = []
        self.build_path(root, string, arr)
        return arr