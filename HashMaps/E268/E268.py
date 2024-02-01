'''
Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
'''


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        total = int((n*(n+1))/2)
        return total - sum(nums)

#! 5min 7sec
