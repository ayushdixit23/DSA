class Solution:
    def lemonadeChange(self, bills: list[int]) -> bool:
        count_of_five = 0
        count_of_ten = 0

        n = len(bills)

        for i in range(n):
            if bills[i] == 5:
                count_of_five += 1
            elif bills[i] == 10:
                count_of_ten += 1
                if count_of_five > 0:
                    count_of_five -= 1
                else:
                    return False
            else:
                if count_of_five > 0 and count_of_ten > 0:
                    count_of_five -= 1 
                    count_of_ten -= 1
                elif count_of_five >= 3:
                    count_of_five -= 3
                else:
                    return False
        
        return True