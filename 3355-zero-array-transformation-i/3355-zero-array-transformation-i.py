class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        n = len(nums)
        arr = [0] * n

        for query in queries:
            start = query[0]
            end = query[1]

            arr[start] += 1
            if end + 1 < n:
                arr[end + 1] -= 1

        for i in range(1, n):
            arr[i] = arr[i - 1] + arr[i]

        for i in range(n):
            if arr[i] < nums[i]:
                return False

        return True
