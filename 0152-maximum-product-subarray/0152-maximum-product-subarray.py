class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n = len(nums)
        leftProduct = 1
        rightProduct = 1
        maximumProduct = float("-inf")

        for i in range(n):
            left = nums[i]
            right = nums[n-1-i]
            
            leftProduct *= left   
            rightProduct *= right

            maxValue = max(leftProduct,rightProduct)

            maximumProduct = max(maximumProduct,maxValue)

            if leftProduct == 0:
                leftProduct = 1
            
            if rightProduct == 0:
                rightProduct = 1

        return maximumProduct