import { searchDikstra, Node } from "../../src/tdd/dikstra-search"

describe("searchDikstra",  () => {
	
	test("function exists", () => {
		expect(searchDikstra).not.toEqual(undefined);
	});

	//test("only root node", () => {
	//	expect(searchDikstra( { a: { } }, "a", "a")).toBe(0);
	//});


	test("single child node", () => {
		/* expect(searchDikstra( { 
						a: { b: 2, c: 1 }, 
						b: { a: 2},
						c: { a: 1} 
						},
						"a", "b")).toBe(2);
		expect(searchDikstra( { 
						a: { b: 2, c: 1 }, 
						b: { a: 2},
						c: { a: 1} 
						},
						"a", "c")).toBe(1); */
		expect(searchDikstra( { 
						a: { b: 2, c: 1, i:3 }, 
						b: { a: 2, d: 3},
						c: { a: 1, d: 1},
						d: { b: 3, c: 1, e: 5}, 
						e: { d: 5, i: 2}, 
						i: { a: 3, e: 2}, 
						},
						"a", "e")).toBe(5);
	});

	/*
	test("two child nodes", () => {
		expect(searchDikstra({ name: "A", weight: 0,
			children: [
				{ name: "B", weight: 6 },
				{ name: "C", weight: 2 }
			]
		 }, "B")).toBe(6);

		 expect(searchDikstra({ name: "A", weight: 0,
			children: [
				{ name: "B", weight: 6 },
				{ name: "C", weight: 2 }
			]
		 }, "C")).toBe(2);
	});

	test("two child nodes with link", () => {
		expect(searchDikstra({ name: "A", weight: 0,
			children: [
				{ name: "B", weight: 6, children: [
					{ name: "C", weight: 3 }
				] },
				{ name: "C", weight: 2, children: [
					{ name: "B", weight: 3 }
				] }
			]
		 }, "C")).toBe(2);

		expect(searchDikstra({ name: "A", weight: 0,
			children: [
				{ name: "B", weight: 6, children: [
					{ name: "C", weight: 3 }
				] },
				{ name: "C", weight: 2, children: [
					{ name: "B", weight: 3 }
				] }
			]
		 }, "B")).toBe(5);
	});
	*/

	/*
	test("two deep levels", () => {
		expect(searchDikstra({ name: "A", weight: 0,
			children: [
				{ name: "B", weight: 6, children: [
					{ name: "C", weight: 3 },
					{ name: "F", weight: 1}
				] },
				{ name: "C", weight: 2, children: [
					{ name: "B", weight: 3 }
				] }
			]
		 }, "B")).toBe(6);
	}); */
});