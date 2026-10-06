class Solution:
    def corpFlightBookings(self, bookings: list[list[int]], n: int) -> list[int]:
        arr = [0] * n

        for booking in bookings:
            start = booking[0] - 1
            end = booking[1] - 1

            arr[start] += booking[2]
            if end+1 < n:
                arr[end+1] -= booking[2]
        
        for i in range(1, n):
            arr[i] = arr[i-1] + arr[i]
        
        return arr