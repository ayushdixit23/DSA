class Solution:
    def merge(self, nums, start, mid, end):
        i = start
        j = mid + 1
        index = 0

        temp_list = [0] * (end - start + 1)

        while i <= mid and j <= end:
            if nums[i] <= nums[j]:
                temp_list[index] = nums[i]
                i += 1
                index += 1
            else:
                temp_list[index] = nums[j]
                j += 1
                index += 1

        while j <= end:
            temp_list[index] = nums[j]
            j += 1
            index += 1

        while i <= mid:
            temp_list[index] = nums[i]
            i += 1
            index += 1

        for k in range(start, end + 1):
            nums[k] = temp_list[k - start]

    def merge_sort(self, nums, start, end):
        if start >= end:
            return

        mid = (start + end) // 2

        self.merge_sort(nums, start=start, end=mid)
        self.merge_sort(nums, start=mid + 1, end=end)

        if nums[mid] <= nums[mid + 1]:
            return

        self.merge(nums, start, mid, end)
        return

    def reverse(self, nums, n):
        i = 0
        j = n - 1

        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1

    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        if n == 1:
            return
        if n == 2:
            self.reverse(nums, n)
            return

        is_reverse_sorted = True
        for i in range(n - 1):
            if nums[i] < nums[i + 1]:
                is_reverse_sorted = False
                break

        if is_reverse_sorted:
            self.reverse(nums, n)
            return

        j = n - 1
        while j > 0 and nums[j - 1] >= nums[j]:
            j -= 1
        j -= 1

        minimumMax = float("inf")
        minimumIndex = -1
        for i in range(j + 1, n):
            if nums[i] > nums[j] and nums[i] < minimumMax:
                minimumMax = nums[i]
                minimumIndex = i

        nums[j], nums[minimumIndex] = nums[minimumIndex], nums[j]

        self.merge_sort(nums, j + 1, n - 1)
