import { scheduleMeeting, Range, GetSecondFunction, slotMachine } from "../../src/tdd/simpson-1";


describe('slotMachine', () => {
	test('empty call', () => {
		expect(slotMachine).not.toEqual(undefined);
	});

	test('display only middle row', () => {
		slotMachine.spin();
		const result = slotMachine.display();
		expect(result).toContain("|");
		expect(result.length).toBe(17);
	});
});


describe('range', (): void => {

	test('empty call', (): void => {
		expect(Range).not.toEqual(undefined);
	});

	test('2 paramaters: start and end of the diaposon are the same', (): void => {
		expect(Range(3, 3)).toEqual([3]);
	});

	test('2 paramaters: end is less than start', (): void => {
		expect(Range(3, 0)).toEqual([]);
	});

	test('2 paramaters: normal case', (): void => {
		expect(Range(3, 4)).toEqual([3, 4]);
		expect(Range(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
	});

	test('1 paramater; check function is returned', (): void => {
		const result = Range(3);
		expect(typeof result).toBe("function");
	});

	test('1 paramater; check function is returned with one argument', (): void => {
		const result = Range(3);
		expect(result.length).toBe(1);
	});

	test('1 paramater; check result', (): void => {
		const start3 = Range(3) as GetSecondFunction;
		expect(start3(0)).toEqual([]);
		expect(start3(3)).toEqual([3]);
		expect(start3(4)).toEqual([3, 4]);

		const start4 = Range(4) as GetSecondFunction;
		expect(start4(6)).toEqual([4, 5, 6]);
	});

});

describe('scheduleMeeting', (): void => {

	test('empty call', (): void => {
		expect(scheduleMeeting).not.toEqual(undefined);
	});

	test('before start of the day', (): void => {
		expect(scheduleMeeting("7:00", 15)).toBe(false);
		expect(scheduleMeeting("7:15", 30)).toBe(false);
		expect(scheduleMeeting("7:30", 15)).toBe(true);
	});

	test('after end of the day', (): void => {
		expect(scheduleMeeting("7:30", 1500)).toBe(false);
		expect(scheduleMeeting("17:50", 15)).toBe(false);
		expect(scheduleMeeting("17:40", 15)).toBe(false);
		expect(scheduleMeeting("17:40", 5)).toBe(true);
	});

	test('during working day', (): void => {
		expect(scheduleMeeting("11:30", 60)).toBe(true);
		expect(scheduleMeeting("17:00", 45)).toBe(true);
	});
});
