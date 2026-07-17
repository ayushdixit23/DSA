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

    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        if n == 1:
            return nums
        self.merge_sort(nums, 0, n - 1)
        return nums
