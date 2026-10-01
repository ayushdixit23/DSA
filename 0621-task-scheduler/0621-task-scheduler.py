import heapq
from collections import deque


class Solution:
    def leastInterval(self, tasks: list[str], n: int) -> int:
        q = deque()
        heap = []
        hash_map = {}
        t = 0

        length = len(tasks)

        for i in range(length):
            hash_map[tasks[i]] = hash_map.get(tasks[i], 0) + 1

        for _, value in hash_map.items():
            heapq.heappush(heap, -value)

        while heap or q:
            while q and q[0][1] <= t:
                heapq.heappush(heap, q.popleft()[0])

            if not heap:
                t = q[0][1]
                continue

            t += 1

            count = heapq.heappop(heap)
            count += 1

            if count:
                q.append((count, t + n))

        return t
