# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def collect_sum_path(self,root, targetSum, ans, sub_ans):
        if root is None:
            return

        if (root.left is None and root.right is None) and root.val == targetSum:
            sub_ans.append(root.val)
            ans.append(sub_ans.copy())
            sub_ans.pop()
            return

        if (root.left is None and root.right is None) and root.val != targetSum:
            return

        newTarget = targetSum - root.val
        sub_ans.append(root.val)
        self.collect_sum_path(root.left, newTarget, ans, sub_ans)
        self.collect_sum_path(root.right, newTarget, ans, sub_ans)
        sub_ans.pop()
        return

    def pathSum(self, root: TreeNode | None, targetSum: int) -> list[list[int]]:
        ans = []
        sub_ans = []
        self.collect_sum_path(root, targetSum, ans, sub_ans)
        return ans