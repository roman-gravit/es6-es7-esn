import { wrap } from "../src/martin-text-wrap";

describe("textWrap",  () => {

	test("textWrap", () => {
		expect(wrap("", 0)).toBe("");
		expect(wrap("", 1)).toBe("");
		expect(wrap("", -1)).toBe("");
		expect(wrap("x", 1)).toBe("x");
		expect(wrap("x", -10)).toBe("");
		expect(wrap("x", 10)).toBe("x");
		expect(wrap("xx", 1)).toBe("x\nx");
		expect(wrap("xx", 2)).toBe("xx");
		expect(wrap("xxx", 1)).toBe("x\nx\nx");
		expect(wrap("xxx", 2)).toBe("xx\nx");
		expect(wrap("xxx", 3)).toBe("xxx");

		let result = wrap("x x", 1);
		expect(result).toBe("x\nx");

		result = wrap("x x", 2);
		expect(result).toBe("x\nx");

		expect(wrap("x x", 3)).toBe("x x");
		result = wrap("xx xx", 1);
		expect(result).toBe("x\nx\nx\nx");
		result = wrap("xx xx", 1);

		expect(wrap("xx xx", 2)).toBe("xx\nxx");
		expect(wrap("xx xx", 3)).toBe("xx\nxx");

		result = wrap("xx xx", 4);
		expect(result).toBe("xx\nxx");
		expect(wrap("xx xx", 5)).toBe("xx xx");
		expect(wrap("Four", 7)).toBe("Four");
		expect(wrap("ago our", 7)).toBe("ago our");
		expect(wrap("Four score", 7)).toBe("Four\nscore");
		expect(wrap("Four score and seven years ago our", 7)).toBe("Four\nscore\nand\nseven\nyears\nago our");
	});
});