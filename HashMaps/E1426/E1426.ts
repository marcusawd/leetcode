function countElements(arr: number[]): number {
	const mySet = new Set<number>(arr);
	let total: number = 0;
	for (const num of arr) {
		if (mySet.has(num + 1)) {
			total++;
		}
	}
	return total;
}
