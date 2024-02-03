/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
*/

function findWinners(matches: number[][]): number[][] {
	// Loop, count number of times player lost
	const hashmap = new Map();
	for (const match of matches) {
		const winner = match[0];
		const loser = match[1];
		// If win, add player key to map, if already exists, just ignore or add 0
		// If lose, add player key to map, if already exists, minus 1
		// Check who has zero (never lost) and who has -1 (lost once)
		hashmap.set(winner, hashmap.get(winner) || 0);
		hashmap.set(loser, (hashmap.get(loser) || 0) - 1);
	}
	const answer: number[][] = [[], []];
	for (const [player, loses] of hashmap) {
		const neverLost = answer[0];
		const lostOnce = answer[1];
		if (loses === 0) neverLost.push(player);
		if (loses === -1) lostOnce.push(player);
	}

	answer.forEach((item) => item.sort((a, b) => a - b));
	return answer;
}

//! 11min 8sec
