'''
Intersection of Multiple Arrays

Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
'''


class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        # Check count = nums.length
        hashmap = {}
        ans = []
        for i in range(len(nums)):
            for j in range(len(nums[i])):
                curr = nums[i][j]
                hashmap[curr] = hashmap.get(curr, 0) + 1

        for key, value in hashmap.items():
            if value == len(nums):
                ans.append(key)

        # Need to sort at the end
        ans.sort()
        return ans

#! 13min 53sec
