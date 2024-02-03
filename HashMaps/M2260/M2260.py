class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        seenMap = {}
        minCount = float("inf")

        for i in range(len(cards)):
            if cards[i] in seenMap:
                minCount = min(minCount, i - seenMap[cards[i]]+1)
            seenMap[cards[i]] = i

        return minCount if minCount != float("inf") else -1
