import { RentalCalculator, VideoRegistry, VideoType } from "../src/martin-customer";


// Req 1: Day 1 -> fee is 1.5$  and 1 bonus point
// Req 2: Days 2-3 ->  is free and no bonuses
// Req 3: Days next ->  fee is 1.5$  and 1 bonus point
// Req 4: *Child Movie* ->  fee is 1$ per day  and 1 bonus point at all
describe("customer",  () => {
	
	VideoRegistry.addMovie("RegularMovie", VideoType.REGULAR);
	VideoRegistry.addMovie("ChildrensMovie", VideoType.CHILDRENS);

	let customer: RentalCalculator = new RentalCalculator();

	test("exists", () => {
		expect(customer).not.toEqual(undefined);
	});

	test("RegularMovie_OneDay", () => {
		customer.addRental("RegularMovie", 1);
		assertFeeAndPoints(1.5 , 1)
	});

	test("RegularMovie_SecondDayFree", () => {
		customer = new RentalCalculator();
		customer.addRental("RegularMovie", 2);
		assertFeeAndPoints(1.5 , 1)
	});

	test("RegularMovie_ThirdDayFree", () => {
		customer = new RentalCalculator();
		customer.addRental("RegularMovie", 3);
		assertFeeAndPoints(1.5 , 1)
	});

	test("RegularMovie_FourDays", () => {
		customer = new RentalCalculator();
		customer.addRental("RegularMovie", 4);
		assertFeeAndPoints(3 , 2)
	});

	test("RegularMovie_FiveDays", () => {
		customer = new RentalCalculator();
		customer.addRental("RegularMovie", 5);
		assertFeeAndPoints(4.5 , 3)
	});

	test("RegularMovie_SixDays", () => {
		customer = new RentalCalculator();
		customer.addRental("RegularMovie", 6);
		assertFeeAndPoints(6 , 4)
	});

	test("ChildrensMovie_OneDay", () => {
		customer = new RentalCalculator();
		customer.addRental("ChildrensMovie", 1);
		assertFeeAndPoints(1 , 1)
	});

	test("ChildrensMovie_FourDays", () => {
		customer = new RentalCalculator();
		customer.addRental("ChildrensMovie", 4);
		assertFeeAndPoints(4 , 1)
	});

	test("OneRegularOneChildrens_FourDays", () => {
		customer = new RentalCalculator();
		customer.addRental("RegularMovie", 4);
		customer.addRental("ChildrensMovie", 4);
		assertFeeAndPoints(3+4 , 2+1)
	});


	function assertFeeAndPoints(fee: number, points: number) {
		expect(customer.getRentalFee()).toBe(fee);
		expect(customer.getRentalPoints()).toBe(points);
	}

});