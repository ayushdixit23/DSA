import heapq
class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        heap = []
        n = len(stones)

        for i in range(n):
            heapq.heappush(heap, -stones[i])

        
        while len(heap) > 1:
            y = -heapq.heappop(heap)
            x = -heapq.heappop(heap)

            if x == y:
                continue
            
            y = y - x
            heapq.heappush(heap, -y)
        
        if len(heap):
            return -heap[0]
        return 0