'''
Counting Elements

Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

'''


class Solution:
    def countElements(self, arr: List[int]) -> int:
        mySet = set(arr)
        count = 0
        for i in range(len(arr)):
            if (arr[i]+1 in mySet):
                count += 1
        return count

#! 5min 31sec
