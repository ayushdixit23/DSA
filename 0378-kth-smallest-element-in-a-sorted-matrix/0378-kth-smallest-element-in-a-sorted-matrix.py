class Solution:
    def merge(self, arr1, arr2):
        i = 0
        j = 0
        result = []

        while i < len(arr1) and j < len(arr2):
            if arr1[i] <= arr2[j]:
                result.append(arr1[i])
                i += 1
            else:
                result.append(arr2[j])
                j += 1

        while i < len(arr1):
            result.append(arr1[i])
            i += 1

        while j < len(arr2):
            result.append(arr2[j])
            j += 1

        return result

    def mergeSort(self,mat,start,end):
        if start == end:
            return mat[start]
        
        mid = (start + end) // 2
        arr1 = self.mergeSort(mat, start, mid)
        arr2 = self.mergeSort(mat, mid+1, end)
        return self.merge(arr1, arr2)

    def kthSmallest(self, matrix: list[list[int]], k: int) -> int:
        n = len(matrix)
        ans = self.mergeSort(matrix,0 , n-1)
        return ans[k-1]