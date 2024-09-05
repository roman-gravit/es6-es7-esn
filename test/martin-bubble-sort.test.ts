import { sortBubble } from "../src/martin-bubble-sort";

describe("sortBubble",  () => {

	test("sort", () => {
		expect(sortBubble([])).toEqual([]);
		expect(sortBubble([1])).toEqual([1]);
		expect(sortBubble([1, 2])).toEqual([1, 2]);
		expect(sortBubble([2, 1])).toEqual([1, 2]);
		expect(sortBubble([1, 2, 3])).toEqual([1, 2, 3]);
		expect(sortBubble([2, 1, 3])).toEqual([1, 2, 3]);
		expect(sortBubble([1, 3, 2])).toEqual([1, 2, 3]);
		expect(sortBubble([3, 2, 1])).toEqual([1, 2, 3]);
		expect(sortBubble([5, 3, 4, 6, 1, 2])).toEqual([1, 2, 3, 4, 5, 6]);
	});
});