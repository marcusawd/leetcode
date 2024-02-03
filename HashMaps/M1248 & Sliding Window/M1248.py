class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        hashmap = {0: 1}
        prefix = 0
        answer = 0

        for num in nums:
            prefix += num % 2
            answer += hashmap.get(prefix-k, 0)
            hashmap[prefix] = hashmap.get(prefix, 0) + 1

        return answer
