class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        if n==1:
            return 0

        sum = 0

        for k in range(n):
            sum += nums[k]
        
        i = 0
        while i < n:
            value = nums[i]
            sum_with_out_value = sum - value
            left_element = i - 0
            right_element = n - 1 - i

            direction = "left"

            if left_element <= right_element:
                direction = "left"
            else:
                direction = "right"

            sum_element = 0
            if direction == "right":
                for j in range(i+1, n):
                    sum_element += nums[j]
            else:
                for j in range(0, i):
                    sum_element += nums[j]

            sum_value = sum_with_out_value - sum_element
            if sum_value == sum_element:
                return i

            i+=1

        return -1