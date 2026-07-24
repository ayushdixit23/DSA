class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 1 or x == 0:
            return x
        
        start = 1
        end = x
        answer = 1

        while start <= end:
            mid = (start + end )// 2
            element = mid * mid
            if element <= x:
                if element == x:
                    return mid
                
                answer = mid
                start = mid + 1
            else:
                end = mid - 1
        return answer