'''
Check if All Characters Have Equal Number of Occurrences

Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).


'''


class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        hashmap = {}
        for num in s:
            hashmap[num] = hashmap.get(num, 0) + 1
        values = list(hashmap.values())
        firstValue = values[0]
        return all(value == firstValue for value in values)

#! 13min 53sec
