class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        if n==1:
            return 0

        prefixSum = [0] * n
        prefixSum[0] = nums[0]
        for i in range(1,n):
            prefixSum[i] = prefixSum[i-1] + nums[i]

        i = 0
        while i < n:
            leftSum = 0
            if i-1 < 0:
                leftSum = 0
            else:
               leftSum = prefixSum[i-1]

            rightSum = prefixSum[n-1] - prefixSum[i] 
            if leftSum == rightSum:
                return i
            
            i+=1
        return -1