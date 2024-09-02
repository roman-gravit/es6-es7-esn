import { Queue } from "../src/martin-queue";

describe("QueueTest",  () => {

	test("CanCreateQueue", () => {
		const queue: Queue = new Queue();
		expect(queue).not.toEqual(undefined);
	});

	test("afterOnePush_isNotEmpty", () => {
		const queue: Queue = new Queue();
		expect(queue.isEmpty()).toBe(true);
		queue.push(0);
		expect(queue.isEmpty()).toBe(false);
	});

	test("afterOnePush_getSizeisNotZero", () => {
		const queue: Queue = new Queue();
		expect(queue.isEmpty()).toBe(true);
		expect(queue.getSize()).toBe(0);
		queue.push(0);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.getSize()).toBe(1);
	});

	test("afterOnePushAndOnePop_isEmpty", () => {
		const queue: Queue = new Queue();
		queue.push(0);
		queue.pop();
		expect(queue.isEmpty()).toBe(true);
		expect(queue.getSize()).toBe(0);
	});

	test("afterTwoPushes_sizeIsTwo", () => {
		const queue: Queue = new Queue();
		queue.push(0);
		queue.push(0);
		expect(queue.getSize()).toBe(2);
		queue.pop();
		queue.pop();
		expect(queue.getSize()).toBe(0);
	});

	test("poppingEmptyQueue_throwsUnderflow", () => {
		const queue: Queue = new Queue();
		expect(() => { queue.pop(); }).toThrow("Queue is empty");
	});

	test("afterPushingX_willPopX", () => {
		const queue: Queue = new Queue();
		queue.push(99);
		expect(queue.pop()).toBe(99);
		queue.push(88);
		expect(queue.pop()).toBe(88);
	});

	test("afterPushingXandY_willPopYthenX", () => {
		const queue: Queue = new Queue();
		queue.push(99);
		queue.push(88);
		expect(queue.pop()).toBe(99);
		expect(queue.pop()).toBe(88);
	});

})