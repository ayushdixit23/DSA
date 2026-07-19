class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        templist = sorted(nums)
        i = 0
        j = 1
        half = (n + 1) // 2

        for index in range(n - 1, half - 1, -1):
            nums[j] = templist[index]
            j += 2

        for index in range(half - 1, -1, -1):
            nums[i] = templist[index]
            i += 2
