class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        # Create the col hashmap, then compare the hashmap while looping through rows
        colsMap = {}
        for col in range(len(grid[0])):
            currentCol = []
            for row in range(len(grid)):
                currentCol.append(grid[row][col])
            colsMap[tuple(currentCol)] = colsMap.get(tuple(currentCol), 0) + 1
        pairs = 0
        for rows in grid:
            if tuple(rows) in colsMap:
                pairs += colsMap[tuple(rows)]
        return pairs
