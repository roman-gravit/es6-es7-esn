import { sort, flat } from "../../src/tdd/martin-sort";

describe("flat",  () => {

	test("flat", () => {
		expect(flat([], 0)).toEqual([]);
		expect(flat([1, 2], 0)).toEqual([1, 2]);
		expect(flat([1, 2, [3]], 0)).toEqual([1, 2, [3]]);
		expect(flat([1, 2, [3]], 1)).toEqual([1, 2, 3]);
		expect(flat([1, 2, [3, 4, 5]], 1)).toEqual([1, 2, 3, 4, 5]);
		expect(flat([1, 2, [3, 4, [5]]], 1)).toEqual([1, 2, 3, 4, [5]]);
		expect(flat([1, [ 2, [3]]], 2)).toEqual([1, 2, 3]);
		expect(flat([1, [ 2, [3]]], 1000000)).toEqual([1, 2, 3]);
	});
});


describe("sort",  () => {

	test("sort", () => {

		expect(sort([])).toEqual([]);
		expect(sort([1])).toEqual([1]);
		expect(sort([1, 2])).toEqual([1, 2]);
		expect(sort([2, 1])).toEqual([1, 2]);
		expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(sort([2, 1, 3])).toEqual([1, 2, 3]);
		expect(sort([1, 3, 2])).toEqual([1, 2, 3]);
		expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
		expect(sort([2, 3, 1])).toEqual([1, 2, 3]);
		expect(sort([3, 1, 2])).toEqual([1, 2, 3]);
		expect(sort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
		expect(sort([2, 1, 3, 4])).toEqual([1, 2, 3, 4]);
		expect(sort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
		expect(sort([1, 3, 1, 2])).toEqual([1, 1, 2, 3]);
		expect(sort([1, 3, 7, 3, 4, 11, 2, 1, 2])).toEqual([1, 1, 2, 2, 3, 3, 4, 7, 11]);
	});
});