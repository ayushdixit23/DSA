# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def heightTree(self, root: TreeNode | None) -> int:
        if root is None or (root.left is None and root.right is None):
            return 0

        return 1 + max(self.heightTree(root.left), self.heightTree(root.right))
    
    def diameter(self, root):
        if root is None or (root.left is None and root.right is None):
            return 0
        count = 0
        count += self.heightTree(root.left)
        count += self.heightTree(root.right)

        if root.left:
            count+=1
        
        if root.right:
            count+=1

        leftCount = self.diameter(root.left)
        rightCount = self.diameter(root.right)

        return max(count, max(leftCount, rightCount))

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        maxHeight = self.diameter(root)
        return maxHeight