# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def helper(self, root, low, high):
        if root is None:
            return None

        while root.left is not None:
            if root.left.val < low:
                root.left = root.left.right
            elif root.left.val > high:
                root.left = root.left.left
            else:
                break
        
        while root.right is not None:
            if root.right.val < low:
                root.left = root.right.right
            elif root.right.val > high:
                root.right = root.right.left
            else:
                break
        
        root.left = self.helper(root.left, low , high)
        root.right = self.helper(root.right, low , high)
        return root

    def trimBST(self, root: TreeNode | None, low: int, high: int) -> TreeNode | None:
        val = float("inf")
        dummyNode = TreeNode(val)
        dummyNode.left = root
        root = self.helper(dummyNode, low , high)
        return root.left
        