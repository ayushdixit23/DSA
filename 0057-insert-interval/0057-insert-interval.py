class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        n = len(intervals)
        ans = []
        ans.append(intervals[0])
        index = 0
        
        for i in range(1,n):
            if intervals[i][0] <= ans[index][1]:
                ans[index][1] = max(intervals[i][1], ans[index][1])
            else:
                ans.append(intervals[i])
                index+=1
        return ans

    def insert(self, intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
        intervals.append(newInterval)
        intervals.sort()
        return self.merge(intervals)