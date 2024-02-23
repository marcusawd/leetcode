class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        longest = 0
        tracking = set()
        for i in range(len(s)):
            while s[i] in tracking:
                tracking.discard(s[left])
                left += 1
            tracking.add(s[i])
            longest = max(longest, i-left+1)
        return longest
