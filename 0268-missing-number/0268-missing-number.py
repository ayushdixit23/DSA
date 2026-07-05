class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)

        total_sum = sum(nums)

        sum_by_formula = (n * (n+1)) // 2

        missing_number = sum_by_formula - total_sum
        return missing_number