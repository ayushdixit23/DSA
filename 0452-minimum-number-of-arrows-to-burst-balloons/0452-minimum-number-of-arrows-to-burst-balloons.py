class Solution:
    def findMinArrowShots(self, points: list[list[int]]) -> int:
        n = len(points)

        points.sort(key=lambda x:x[1])
        count = 1
        last = points[0][1]

        for i in range(1, n):
            if last < points[i][0]:
                count+=1
                last = points[i][1]
        
        return count