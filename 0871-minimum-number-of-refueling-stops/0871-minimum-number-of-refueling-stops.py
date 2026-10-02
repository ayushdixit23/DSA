import heapq
class Solution:
    def minRefuelStops(self, target: int, startFuel: int, stations: list[list[int]]) -> int:
        max_heap = []
        fuel = startFuel
        stops = 0
        i = 0

        while fuel < target:
            while i < len(stations) and stations[i][0] <= fuel:
                heapq.heappush(max_heap, -stations[i][1])
                i += 1

            if not max_heap:
                return -1

            fuel += -heapq.heappop(max_heap)
            stops += 1

        return stops