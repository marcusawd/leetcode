class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        prefix = [gain[0]]
        for i in range(1, len(gain)):
            prefix.append(gain[i] + prefix[len(prefix) - 1])
        return max(max(prefix), 0)

#! 3min 40sec
