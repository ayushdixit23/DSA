# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def indexValueInOrder(self, inorder , start, end, value):
        for i in range(start, end + 1):
            if inorder[i] == value:
                return i
        return -1

    def helper(self, preorder, inorder,preorderStart, start, end, n):
        if start > end:
            return None
            
        value = preorder[preorderStart]
        index = self.indexValueInOrder(inorder, start, end, value)
        root = TreeNode(value)
        
        leftSize = index - start

        root.left = self.helper(
            preorder,
            inorder,
            preorderStart + 1,
            start,
            index - 1,
            n
        )

        root.right = self.helper(
            preorder,
            inorder,
            preorderStart + 1 + leftSize,
            index + 1,
            end,
            n
        )

        return root

    def buildTree(self, preorder: list[int], inorder: list[int]) -> TreeNode | None:
        n = len(preorder)
        return self.helper(preorder, inorder, 0, 0, n - 1, n)
