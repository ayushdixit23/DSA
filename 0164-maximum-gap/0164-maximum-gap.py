class Solution:
    def merge(self, nums, start, mid, end):
        i = start
        j = mid + 1
        temp_list = []

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

    def maximumGap(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1:
            return 0

        self.merge_sort(nums, 0, n - 1)
        max_diff = 0

        for i in range(n - 1):
            diff = nums[i + 1] - nums[i]
            max_diff = max(max_diff, diff)
        
        return max_diff
