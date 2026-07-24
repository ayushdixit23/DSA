class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        start = 1
        end = num

        while start <= end:
            mid = (start + end) // 2
            element = mid * mid
            if element == num:
                return True
            elif element < num:
                start = mid + 1
            else:
                end = mid - 1
        return False
