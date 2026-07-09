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

        while j <= end:
            temp_list.append(nums[j])
            j += 1

        while i <= mid:
            temp_list.append(nums[i])
            i += 1

        for k in range(start, end + 1):
            nums[k] = temp_list[k - start]

    def merge_sort(self, nums, start, end):
        if start == end:
            return [nums[start]]

        mid = (start + end) // 2

        self.merge_sort(nums, start=start, end=mid)
        self.merge_sort(nums, start=mid + 1, end=end)

        self.merge(nums, start, mid, end)
        return nums

    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        if n == 0:
            return []
        return self.merge_sort(nums, 0 ,n-1)