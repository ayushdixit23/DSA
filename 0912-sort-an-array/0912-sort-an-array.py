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

    # def partition(self, nums, start, end):
    #     pivot = nums[start]
    #     index = start + 1
    #     i = start + 1

    #     while i <= end:
    #         if nums[i] < pivot:
    #             nums[index], nums[i] = nums[i], nums[index]
    #             index += 1
    #         i+=1
    #     nums[start], nums[index - 1] = nums[index - 1], nums[start]
    #     return index - 1

    # def quick_sort(self, nums, start, end):
    #     if start >= end:
    #         return

    #     mid = (start + end) // 2
    #     nums[start], nums[mid] = nums[mid], nums[start]
    #     pivotIndex = self.partition(nums, start, end)
    #     self.quick_sort(nums, start, pivotIndex - 1)
    #     self.quick_sort(nums, pivotIndex + 1, end)
    #     return

    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        # self.quick_sort(nums, 0, n - 1)
        self.merge_sort(nums, 0, n - 1)
        return nums
