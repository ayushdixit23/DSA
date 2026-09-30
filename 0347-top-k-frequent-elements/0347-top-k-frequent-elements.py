import heapq
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        n = len(nums)
        hash_map = {}
        for i in range(n):
            hash_map[nums[i]] = hash_map.get(nums[i], 0) + 1
        
        heap = []
        for key, value in hash_map.items():
            heapq.heappush(heap, (value, key))
            if len(heap) > k:
                heapq.heappop(heap)
        
        ans = []
        while heap:
            value , key = heap[0]
            ans.append(key)
            heapq.heappop(heap)
        
        return ans