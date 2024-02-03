class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0
        jewelSet = set(jewels)
        for ch in stones:
            if ch in jewelSet:
                count += 1
        return count
