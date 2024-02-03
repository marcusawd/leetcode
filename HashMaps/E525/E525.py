class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        hashmap = {0: -1}
        curr = 0
        answer = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                curr += 1
            else:
                curr -= 1
            if curr in hashmap:
                answer = max(answer, i - hashmap[curr])
            else:
                hashmap[curr] = i
        return answer
