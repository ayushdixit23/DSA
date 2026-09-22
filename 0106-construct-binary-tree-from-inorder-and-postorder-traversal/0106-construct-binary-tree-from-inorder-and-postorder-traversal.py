# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def indexValueInOrder(self, inorder, start, end, value):
        for i in range(start, end + 1):
            if inorder[i] == value:
                return i
        return -1

    def helper(self, inorder, postorder, postOrderStart, start, end):
        if start > end or postOrderStart < 0:
            return None

        value = postorder[postOrderStart]
        index = self.indexValueInOrder(inorder, start, end, value)

        rightSize = end - index

        root = TreeNode(value)
        root.right = self.helper(inorder, postorder, postOrderStart - 1, index + 1, end)
        root.left = self.helper(
            inorder, postorder, postOrderStart - 1 - rightSize, start, index - 1
        )
        return root

    def buildTree(self, inorder: list[int], postorder: list[int]) -> TreeNode | None:
        n = len(inorder)
        return self.helper(inorder, postorder, n - 1, 0, n - 1)
