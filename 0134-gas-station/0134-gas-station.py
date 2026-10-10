class Solution:
    def canCompleteCircuit(self, gas: list[int], cost: list[int]) -> int:
        total_gas = 0
        total_cost = 0
        curr = 0
        index = 0

        n = len(gas)

        for i in range(n):
            total_gas += gas[i]
            total_cost += cost[i]
            curr += gas[i] - cost[i]

            if curr < 0:
                index = i + 1
                curr = 0
        
        if total_cost > total_gas:
            return -1
        else:
            return index