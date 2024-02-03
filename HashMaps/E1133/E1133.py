class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        hashmap = {}
        for num in nums:
            hashmap[num] = hashmap.get(num, 0) + 1
        answer = -1
        for key, value in hashmap.items():
            if value == 1:
                answer = max(answer, key)
        return answer
