class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        k = k % n
        temp = []

        for i in range(-k, 0,1):
            temp.append(nums[i])

        j =  n - k - 1
        while j >= 0:
            nums[j + k] = nums[j]
            j -= 1

        for i in range(0, k):
            nums[i] = temp[i]
