class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        hashmap = {}
        for match in matches:
            winner = match[0]
            loser = match[1]
            hashmap[winner] = hashmap.get(winner, 0)
            hashmap[loser] = hashmap.get(loser, 0) - 1

        winners = []
        losers = []
        for player, losses in hashmap.items():
            if losses == 0:
                winners.append(player)
            if losses == -1:
                losers.append(player)

        return [sorted(winners), sorted(losers)]
