class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        n = len(nums)
        three_sum_list = []

        nums.sort()

        for index in range(n):
            target = -nums[index]

            i = index + 1
            j = n - 1

            if index > 0 and nums[index] == nums[index - 1]:
                continue

            if index == i or index == j or i == j:
                continue

            while i < j:
                two_sum = nums[i] + nums[j]
                if two_sum == target:
                    three_sum_list.append([nums[index], nums[i], nums[j]])
                    while i < j and nums[i] == nums[i + 1]:
                        i += 1

                    while i < j and nums[j] == nums[j - 1]:
                        j -= 1

                    i += 1
                    j -= 1
                elif two_sum > target:
                    j -= 1
                else:
                    i += 1

        return three_sum_list
