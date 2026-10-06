class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)
        prefixLeftMax = [0] * n
        prefixRightMax = [0] * n
        
        prefixLeftMax[0] = height[0]
        prefixRightMax[n - 1] = height[n - 1]

        i = 1
        j = n - 2

        while i < n:
            prefixLeftMax[i] = max(prefixLeftMax[i - 1], height[i])
            prefixRightMax[j] = max(prefixRightMax[j + 1], height[j])

            i += 1
            j -= 1
        
        i = 0

        total = 0
        for i in range(n):
            element = height[i]
            if ((element < prefixLeftMax[i]) and (element < prefixRightMax[i])):
                total += min(prefixLeftMax[i], prefixRightMax[i]) - height[i]
        
        return total