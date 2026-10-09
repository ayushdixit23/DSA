class Solution:
    def eraseOverlapIntervals(self, intervals: list[list[int]]) -> int:
        n = len(intervals)

        intervals.sort(key=lambda x: x[1])

        last = intervals[0][1]

        count = 0

        for i in range(1, n):
            if last > intervals[i][0]:
                count += 1
            else:
                last = intervals[i][1]
        return count