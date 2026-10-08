class Solution:
    def matchPlayersAndTrainers(self, players: list[int], trainers: list[int]) -> int:
        n = len(players)
        m = len(trainers)

        players.sort()
        trainers.sort()

        i , j = 0 , 0
        count = 0

        while i < n and j < m:
            if players[i] <= trainers[j]:
                count += 1
                i+=1
                j+=1
            else:
                j+=1
        
        return count