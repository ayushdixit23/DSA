class Solution:
    def merge_sort(self, nums, start, end):
        if start >= end:
            return

        mid = (start + end) // 2
        self.merge_sort(nums, start, mid)
        self.merge_sort(nums, mid + 1, end)

        if nums[mid] <= nums[mid + 1]:
            return

        self.merge(nums, start, mid, end)
        return

    def merge(self, nums, start, mid, end):
        temp_list = []
        i = start
        j = mid + 1

        while i <= mid and j <= end:
            if nums[i] <= nums[j]:
                temp_list.append(nums[i])
                i += 1
            else:
                temp_list.append(nums[j])
                j += 1
        while i <= mid:
            temp_list.append(nums[i])
            i += 1
        while j <= end:
            temp_list.append(nums[j])
            j += 1

        for index in range(start, end + 1):
            nums[index] = temp_list[index - start]

        return

    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        if n == 1:
            return

        if n == 2:
            nums.reverse()
            return

        is_reverse_sorted = True

        for i in range(1, n):
            if nums[i] > nums[i - 1]:
                is_reverse_sorted = False
                break

        if is_reverse_sorted:
            nums.reverse()
            return

        element = nums[n - 1]
        index = n - 1

        for i in range(n - 2, -1, -1):
            if nums[i] < element:
                index = i
                break
            else:
                element = nums[i]
        minimumIndex = index + 1
        for i in range(index + 1, n):
            if nums[i] > nums[index] and nums[i] < nums[minimumIndex]:
                minimumIndex = i
        nums[index], nums[minimumIndex] = nums[minimumIndex], nums[index]

        self.merge_sort(nums, index + 1, n - 1)
        return