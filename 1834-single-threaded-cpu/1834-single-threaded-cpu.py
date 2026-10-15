import heapq
class Solution:
    def getOrder(self, tasks: list[list[int]]) -> list[int]:
        n = len(tasks)
        heap = []

        for i, task in enumerate(tasks):
            task.append(i)

        tasks.sort()
        t = tasks[0][0]

        index = []

        i = 0

        while heap or i < n:
            while i < n and tasks[i][0] <= t:
                heapq.heappush(heap, (tasks[i][1], tasks[i][2]))
                i += 1

            if not heap:
                t = tasks[i][0]
                continue

            time, ind = heapq.heappop(heap)
            t += time
            index.append(ind)

        return index
