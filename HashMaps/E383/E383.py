class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        map = {}
        for ch in magazine:
            map[ch] = map.get(ch, 0) + 1
        for ch in ransomNote:
            map[ch] = map.get(ch, 0) - 1
            if map[ch] < 0:
                return False
        return True
