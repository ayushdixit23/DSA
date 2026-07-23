class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])
        count = 0

        for i in range(n):
            nums = grid[i]
            start = 0
            end = m - 1

            while start <= end:
                mid = (start + end) // 2

                if nums[mid] >= 0:
                    start = mid + 1
                else:
                    count += end - mid + 1
                    end = mid - 1
        return count