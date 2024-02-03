class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagramMap = {}
        for s in strs:
            key = "".join(sorted(s))
            if key in anagramMap:
                anagramMap[key].append(s)
            else:
                anagramMap[key] = [s]

        return list(anagramMap.values())
