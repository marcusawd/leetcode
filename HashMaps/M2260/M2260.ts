/*
Minimum Consecutive Cards to Pick Up

You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.
*/

function minimumCardPickup(cards: number[]): number {
	// Use a hashmap to store the card value as key, index as value. If you seen it, compare indexes. Put laast seen index
	const seenMap = new Map();
	let minCount = Number.MAX_VALUE;
	for (let i = 0; i < cards.length; i++) {
		if (seenMap.has(cards[i])) {
			minCount = Math.min(minCount, i - seenMap.get(cards[i]) + 1);
		}
		seenMap.set(cards[i], i);
	}
	return minCount === Number.MAX_VALUE ? -1 : minCount;
}
