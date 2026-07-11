class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        temp_list = sorted(nums)
        n = len(nums)
        i = 0
        j = 1
        half = (n + 1) // 2

        for k in range(n - 1, half - 1, -1):
            nums[j] = temp_list[k]
            j += 2
        for k in range(half - 1, -1, -1):
            nums[i] = temp_list[k]
            i += 2
