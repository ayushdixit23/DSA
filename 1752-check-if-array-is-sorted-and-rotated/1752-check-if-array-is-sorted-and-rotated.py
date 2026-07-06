class Solution:
    # def check(self, nums: List[int]) -> bool:
    #     n = len(nums)

    #     if n == 1:
    #         return True

    #     count = 1

    #     for i in range(2*n-1):
    #         if nums[i%n] <= nums[(i+1) % n]:
    #             count +=1
    #         else:
    #             count = 1
            
    #         if count == n:
    #             return True
    #     return False

    def check(self, nums: List[int]) -> bool:
        n = len(nums)

        if n == 1:
            return True

        count = 0

        for i in range(1,n+1):
            if nums[i%n] < nums[(i-1)%n]:
                count+=1
        
        return count <= 1