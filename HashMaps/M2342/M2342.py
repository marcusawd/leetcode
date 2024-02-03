class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        def sumDigits(num):
            total = 0
            while (num > 0):
                total += num % 10
                num = num // 10
            return total
        seenMap = {}
        maxVal = -1
        for num in nums:
            sum = sumDigits(num)
            if sum in seenMap:
                maxVal = max(maxVal, num + seenMap[sum])
                seenMap[sum] = max(seenMap[sum], num)
            else:
                seenMap[sum] = num
        return maxVal
