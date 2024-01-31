class Solution:
    def repeatedCharacter(self, s: str) -> str:
        mySet = set()
        for ch in s:
            if ch in mySet:
                return ch
            mySet.add(ch)
        return -1
