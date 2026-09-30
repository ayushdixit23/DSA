import heapq
class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        heap = []

        n = len(points)

        for i in range(n):
            x = points[i][0]
            y = points[i][1]

            dist = x * x + y * y
            heapq.heappush(heap, (-dist, x, y))
            if len(heap) > k:
                heapq.heappop(heap)
        
        ans = []
        while heap:
            elem = heap[0]
            dist , x , y = elem
            ans.append([x, y])
            heapq.heappop(heap)
        
        return ans