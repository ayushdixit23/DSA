class NumArray:
    def __init__(self, nums: list[int]):
        n = len(nums)
        self.arr = [0] * n
        self.arr[0] = nums[0]

        for i in range(1, n):
            self.arr[i] = self.arr[i-1] + nums[i]

    def sumRange(self, left: int, right: int) -> int:
        if left == 0:
            return self.arr[right]
        else:
            return self.arr[right] - self.arr[left-1]

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)