# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
import heapq
class Solution:
    def kthLargestLevelSum(self, root: TreeNode | None, k: int) -> int:
        q = deque()
        heap = []
        maxLevel = -1

        q.append((root, 1))

        while q:
            total_sum = 0
            for _ in range(len(q)):
                node, level = q.popleft()
                maxLevel = max(maxLevel, level)
                total_sum += node.val

                if node.left:
                    q.append((node.left, level+1))

                if node.right:
                    q.append((node.right, level+1))

            heapq.heappush(heap, total_sum)
            if len(heap) > k:
                heapq.heappop(heap)
        if k > maxLevel:
            return -1
        return heap[0]