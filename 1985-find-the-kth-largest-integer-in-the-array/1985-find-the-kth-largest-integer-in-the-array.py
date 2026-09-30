import heapq
class Solution:
    def kthLargestNumber(self, nums: list[str], k: int) -> str:
        n = len(nums)
        hash_map = {}

        heap = []
        for i in range(n):
            heapq.heappush(heap,(int(nums[i]), i))
            if len(heap) > k:
                heapq.heappop(heap)
        
        return str(heap[0][0])