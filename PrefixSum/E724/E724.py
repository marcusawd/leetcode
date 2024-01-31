class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = 0
        for num in nums:
            total += num

        # Create prefix from the left and compare with the right prefix(total)
        leftPrefix = 0
        for i in range(len(nums)):
            if (total - nums[i] - leftPrefix) == leftPrefix:
                return i
            leftPrefix += nums[i]
        return -1

#! 3min 45sec (After doing the question in ts)
