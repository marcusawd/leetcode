class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        def calculateCost(s, t, i):
            return abs(ord(s[i]) - ord(t[i]))

        maxLength = 0
        window = 0
        left = 0
        for right in range(len(s)):
            cost = calculateCost(s, t, right)
            window += cost

            while window > maxCost:
                cost = calculateCost(s, t, left)
                window -= cost
                left += 1
            maxLength = max(maxLength, right-left+1)
        return maxLength
