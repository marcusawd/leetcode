function areOccurrencesEqual(s: string): boolean {
	const hashmap = new Map<string, number>();
	for (const ch of s) {
		hashmap.set(ch, (hashmap.get(ch) || 0) + 1);
	}
	const values = Array.from(hashmap.values());
	const firstValue = values[0];
	return values.every((value) => value === firstValue);
}
