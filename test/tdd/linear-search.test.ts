import { searchLinearIndexOf } from "../../src/tdd/linear-search";

describe("searchLinearIndexOf",  () => {


	function time(...args: any[]) {
		return function() : string {
			return "Hello, Decorator1";
		}
	}

	interface Product {
		name: string;
		price: number;
	}
	class Product implements Product {
		constructor(public name: string, public price: number) {}

		@time
		getDetails(id: number): string {
			return `Name: ${this.name}, Price: $${this.price}`;
		}
	}

	let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
	console.log(products[0].getDetails(1));

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