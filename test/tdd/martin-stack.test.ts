import { Stack } from "../../src/tdd/martin-stack";

describe("StackTest",  () => {

	test("CanCreateStack", () => {
		const stack: Stack = new Stack();
		expect(stack).not.toEqual(undefined);
	});

	test("afterOnePush_isNotEmpty", () => {
		const stack: Stack = new Stack();
		expect(stack.isEmpty()).toBe(true);
		stack.push(0);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.getSize()).toBe(1);
	});

	test("afterOnePushAndOnePop_isEmpty", () => {
		const stack: Stack = new Stack();
		stack.push(0);
		stack.pop();
		expect(stack.isEmpty()).toBe(true);
		expect(stack.getSize()).toBe(0);
	});

	test("afterTwoPushes_sizeIsTwo", () => {
		const stack: Stack = new Stack();
		stack.push(0);
		stack.push(0);
		expect(stack.getSize()).toBe(2);
	});

	test("poppingEmptyStack_throwsUnderflow", () => {
		const stack: Stack = new Stack();
		expect(() => { stack.pop(); }).toThrow("Stack is empty");
	});
	
	test("afterPushingX_willPopX", () => {
		const stack: Stack = new Stack();
		stack.push(99);
		expect(stack.pop()).toBe(99);
		stack.push(88);
		expect(stack.pop()).toBe(88);
	});
	
	test("afterPushingXandY_willPopYthenX", () => {
		const stack: Stack = new Stack();
		stack.push(99);
		stack.push(88);
		expect(stack.pop()).toBe(88);
		expect(stack.pop()).toBe(99);
	});
	
});
