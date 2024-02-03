function numJewelsInStones(jewels: string, stones: string): number {
	let count = 0;
	const set = new Set(jewels);
	for (const ch of stones) {
		if (set.has(ch)) {
			count++;
		}
	}
	return count;
}

//! 2min 30secs
