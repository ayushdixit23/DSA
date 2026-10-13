class Solution:
    def bagOfTokensScore(self, tokens: list[int], power: int) -> int:
        tokens.sort()

        left = 0
        right = len(tokens) - 1

        score = 0
        max_score = 0

        while left <= right:
            if power >= tokens[left]:
                score += 1
                power -= tokens[left]
                left += 1
                max_score = max(max_score, score)

            elif score > 0 and left < right:
                score -= 1
                power += tokens[right]
                right -= 1

            else:
                break

        return max_score
