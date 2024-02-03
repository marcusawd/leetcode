import math


class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        # ? Short answer is to create a map with the characters
        mp = {"b": 0, "a": 0, "l": 0, "o": 0, "n": 0}
        for ch in text:
            if ch in mp:
                mp[ch] += 1
        return math.floor(min(mp["b"], mp["a"], mp["l"]/2, mp["o"]/2, mp["n"]))
