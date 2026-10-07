class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)

        prefix_left_max = [0] * n
        prefix_right_max = [0] * n

        i = 0
        j = n - 1
        prefix_left_max[i] = height[i]
        prefix_right_max[j] = height[j]

        i+=1
        j-=1

        while i < n:
            prefix_left_max[i] = max(height[i], prefix_left_max[i-1])
            prefix_right_max[j] = max(height[j], prefix_right_max[j+1])

            i+=1
            j-=1
        
        ans = 0
        for i in range(n):
            minMax = min(prefix_left_max[i],prefix_right_max[i])
            ans += minMax - height[i]
        
        return ans