export { sortBubble };

function sortBubble(list: number[]): number[] {

	if(list.length > 1) {
		for (let limit = list.length - 1; limit > 0; limit--) {
			for (let firstInd=0; firstInd < limit; firstInd++) {
				let secondInd = firstInd + 1;
				if (list[firstInd] > list[secondInd]) {
					[list[firstInd], list[secondInd]] = [list[secondInd], list[firstInd]];
				}
			}
		}
	}
	return list;
}