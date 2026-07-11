class Solution:
    def fourSumCount(
        self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]
    ) -> int:
        n = len(nums1)
        hash_map = {}
        count = 0

        for i in range(n):
            for j in range(n):
                total_sum = nums3[i] + nums4[j]

                if total_sum in hash_map:
                    hash_map[total_sum] += 1
                else:
                    hash_map[total_sum] = 1

        for i in range(n):
            for j in range(n):
                d = -(nums1[i] + nums2[j])
                if d in hash_map:
                    count += hash_map[d]

        return count
