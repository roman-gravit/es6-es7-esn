import { searchLinearIndexOf } from "../../src/tdd/linear-search";

describe("searchLinearIndexOf",  () => {

	test("searchLinearIndexOf", () => {
		expect(searchLinearIndexOf([], 0)).toBe(-1);
		expect(searchLinearIndexOf([0], 0)).toBe(0);
		expect(searchLinearIndexOf([0], 1)).toBe(-1);
		expect(searchLinearIndexOf([0, 1], 0)).toBe(0);
		expect(searchLinearIndexOf([0, 1], 1)).toBe(1);
		expect(searchLinearIndexOf([0, 1, 2], 0)).toBe(0);
		expect(searchLinearIndexOf([0, 1, 2], 1)).toBe(1);
		expect(searchLinearIndexOf([0, 1, 2], 2)).toBe(2);
		expect(searchLinearIndexOf([2, 3, 5, 7, 11, 13], 7)).toBe(3);
	});
});