class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        n = len(nums)
        nums.sort()
        four_sum_list = []

        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            for j in range(i + 1, n):
                k = j + 1
                l = n - 1

                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue

                while k < l:
                    if nums[i] + nums[j] + nums[k] + nums[l] == target:
                        four_sum_list.append([nums[i], nums[j], nums[k], nums[l]])

                        while k < l and nums[k] == nums[k + 1]:
                            k += 1

                        while k < l and nums[l] == nums[l - 1]:
                            l -= 1
                        l -= 1
                        k += 1
                    elif nums[i] + nums[j] + nums[k] + nums[l] > target:
                        l -= 1
                    else:
                        k += 1

        return four_sum_list
