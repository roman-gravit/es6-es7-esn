import { factorsOf } from "../../src/tdd/martin-prime-numbers";

describe("factorsOf",  () => {

	test("poppingEmptyQueue_throwsUnderflow", () => {
		expect(factorsOf(1)).toEqual([]);
		expect(factorsOf(2)).toEqual([2]);
		expect(factorsOf(3)).toEqual([3]);
		expect(factorsOf(4)).toEqual([2, 2]);
		expect(factorsOf(5)).toEqual([5]);
		expect(factorsOf(6)).toEqual([2, 3]);
		expect(factorsOf(7)).toEqual([7]);
		expect(factorsOf(8)).toEqual([2, 2, 2]);
		expect(factorsOf(9)).toEqual([3, 3]);
		expect(factorsOf(10)).toEqual([2, 5]);
		expect(factorsOf(11)).toEqual([11]);
		expect(factorsOf(12)).toEqual([2, 2, 3]);
		expect(factorsOf(13)).toEqual([13]);
		expect(factorsOf(14)).toEqual([2, 7]);
		expect(factorsOf(2*2*3*5*7*11)).toEqual([2, 2, 3, 5, 7, 11]);
	});
})