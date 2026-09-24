# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeSortedArray(self, arr1, arr2):
        arr = []
        i = 0
        j = 0
        m = len(arr1)
        n = len(arr2)

        while i < m and j < n:
            if arr1[i] <= arr2[j]:
                arr.append(arr1[i])
                i += 1
            else:
                arr.append(arr2[j])
                j += 1
        while i < m:
            arr.append(arr1[i])
            i += 1
        while j < n:
            arr.append(arr2[j])
            j += 1
        return arr
    
    def dfs(self, root, arr):
        if root is None:
            return

        self.dfs(root.left, arr)

        arr.append(root.val)
        
        self.dfs(root.right, arr)
        return

    def getAllElements(self, root1: TreeNode | None, root2: TreeNode | None) -> list[int]:
        arr1 = []
        arr2 = []

        self.dfs(root1, arr1)
        self.dfs(root2, arr2)

        return self.mergeSortedArray(arr1, arr2)