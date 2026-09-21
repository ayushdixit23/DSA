# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: TreeNode | None, root2: TreeNode | None) -> TreeNode | None:
        if root1 is None and root2 is None:
            return None
        
        root1Value = root1.val if root1 else 0
        root2Value = root2.val if root2 else 0
        
        root = TreeNode(root1Value + root2Value)

        root.left = self.mergeTrees(
            root1.left if root1 else None,
            root2.left if root2 else None
        )
        root.right = self.mergeTrees(
            root1.right if root1 else None,
            root2.right if root2 else None
        )

        return root