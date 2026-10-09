import heapq
from collections import deque


class Solution:
    def leastInterval(self, tasks: list[str], k: int) -> int:
        n = len(tasks)
        hash_map = {}
        heap = []
        q = deque()

        for i in range(n):
            hash_map[tasks[i]] = hash_map.get(tasks[i], 0) + 1

        for key, value in hash_map.items():
            heapq.heappush(heap, -value)

        t = 0

        while heap or q:
            while q and q[0][1] <= t:
                elem = q.popleft()[0]
                heapq.heappush(heap, elem)

            if not heap:
                t = q[0][1]
                continue

            t += 1
            freq = heapq.heappop(heap)
            freq += 1
            if freq:
                time = t + k
                q.append((freq, time))

        return t
