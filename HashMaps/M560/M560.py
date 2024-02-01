class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        hashmap = {0: 1}
        ans = 0
        prefix = 0

        for num in nums:
            prefix += num
            ans += hashmap.get(prefix - k, 0)
            hashmap[prefix] = hashmap.get(prefix, 0) + 1

        return ans

#! 10min 56sec
