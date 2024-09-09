import { searchBinaryIndexOf } from "../../src/tdd/binary-search";

describe("searchBinaryIndexOf",  () => {

	test("searchBinaryIndexOf", () => {
		expect(searchBinaryIndexOf([], 0)).toBe(-1);
		expect(searchBinaryIndexOf([0], 0)).toBe(0);
		expect(searchBinaryIndexOf([0], 1)).toBe(-1);
		expect(searchBinaryIndexOf([2, 4], 2)).toBe(0);
		expect(searchBinaryIndexOf([2, 4], 4)).toBe(1);
		expect(searchBinaryIndexOf([1, 2, 4], 4)).toBe(2);
		expect(searchBinaryIndexOf([1, 2, 4], 1)).toBe(0);
		expect(searchBinaryIndexOf([1, 2, 4], 2)).toBe(1);
		expect(searchBinaryIndexOf([1, 2, 4, 6, 8, 10], 1)).toBe(0);
		expect(searchBinaryIndexOf([1, 2, 4, 6, 8, 10], 10)).toBe(5);
		expect(searchBinaryIndexOf([1, 2, 4, 6, 8, 10], 2)).toBe(1);
	});
});