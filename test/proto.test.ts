
// 1) __proto__
//    __proto__(legacy) OR [[Prototype]] has EVERY object.
//     __proto__ is get/set of [[Prototype]] property
//    Can get via Object.getPrototypeOf(obj)
//    Objects of the same type has the same __proto__.
//    __proto__ is ref to from which class current object was created ( new Array | new Object | new Boolean...)
//    __proto__ reference to class prototype with the help of current object was created
//
// 2) .prototype
//    .prototype has ONLY CLASS or FUNCTION (Arrow function DOESNT have prototype)
//    .prototype is ref to constructor

test("__proto__prototype", () => {

	// __proto__ 
	// equal only for variables of the same type
	{

		// Object : Object => true
		const obj1 = {};
		const obj2 = {};
		const _proto1_ = Object.getPrototypeOf(obj1);   // Object()
		const _proto2_ = Object.getPrototypeOf(obj2);   // Object()
		expect(_proto1_).toEqual(_proto2_);

		// array : array => true
		const arr1: number[] = [];
		const arr2: number[] = [];
		const _protoa1_ = Object.getPrototypeOf(arr1);  // Array()
		const _protoa2_ = Object.getPrototypeOf(arr2);  // Array()
		expect(_protoa1_).toEqual(_protoa2_);

		// Number : Number => true
		const num1 = 10;
		const num2 = 100;
		const _proton1_ = Object.getPrototypeOf(num1);  // Number()
		const _proton2_ = Object.getPrototypeOf(num2);  // Number()
		expect(_proton1_).toEqual(_proton2_);

		// Function : Function => true
		const func1 = function(){};
		const func2 = () => {};
		const _protof1_ = Object.getPrototypeOf(func1);  // Function()
		const _protof2_ = Object.getPrototypeOf(func2);  // Function()
		expect(_protof1_).toEqual(_protof2_);

		// Boloean : String => false
		const bool1 = true;
		const str = "str";
		const _protob1_ = Object.getPrototypeOf(bool1);  // Boolean()
		const _protos2_ = Object.getPrototypeOf(str);    // String()
		expect(_protob1_).not.toEqual(_protos2_);

		// Object : Array => false
		const obj3 = {};
		const arr3:number[] = [];
		const _protoo3_ = Object.getPrototypeOf(obj3);  // Object()
		const _protoa3_ = Object.getPrototypeOf(arr3);  // Array()
		expect(_protoo3_).not.toEqual(_protoa3_);

		// Class(Function) : Function => true
		const func3 = function(){};
		const class_test = class Test{};
		const _protof3_ = Object.getPrototypeOf(func3);       // Function()
		const _protoc1_ = Object.getPrototypeOf(class_test);  // Function()
		expect(_protof3_).toEqual(_protoc1_);

		// Class Test : Function => false
		const func4 = function(){};
		const test_obj = new class_test();
		const _protof4_ = Object.getPrototypeOf(func4);        // Function()
		const _proto_test_ = Object.getPrototypeOf(test_obj);  // Test()
		expect(_proto_test_).not.toEqual(_protof4_);

	}

	//prototype
	{

		// Object doesnt have .prototype
		const obj: any = {};
		expect(obj["prototype"]).toEqual(undefined);

		// Array doesnt have .prototype
		const arr: any = [];
		expect(arr["prototype"]).toEqual(undefined);

		// Number doesnt have .prototype
		const num: any = 10;
		expect(num["prototype"]).toEqual(undefined);

		// Function HAS .prototype
		function test() {}
		const prototype_f = test.prototype;
		expect(prototype_f).not.toEqual(undefined);

		// Arrow Function DOESNT have .prototype
		const test1 = () =>{};
		const prototype_f_a= test1.prototype;
		expect(prototype_f_a).toEqual(undefined);

		// Class(Function) HAS .prototype
		const class_test = class Test{};
		const prototype_c = class_test.prototype;
		expect(prototype_c).not.toEqual(undefined);

		// These are all classes
		expect(Object.prototype).not.toEqual(undefined);
		expect(Number.prototype).not.toEqual(undefined);
		expect(String.prototype).not.toEqual(undefined);
		expect(Array.prototype).not.toEqual(undefined);
		expect(Boolean.prototype).not.toEqual(undefined);
		expect(Function.prototype).not.toEqual(undefined);
		expect(Symbol.prototype).not.toEqual(undefined);
		expect(Promise.prototype).not.toEqual(undefined);
		expect(BigInt.prototype).not.toEqual(undefined);
	}

	// to what __proto__ refers
	{
		const obj1 = {};
		const _proto1_ = Object.getPrototypeOf(obj1);   // Object()
		expect(_proto1_).toEqual(Object.prototype);

		const arr1: number[] = [];
		const _protoa1_ = Object.getPrototypeOf(arr1);  // Array()
		expect(_protoa1_).toEqual(Array.prototype);

		const num1 = 10;
		const _proton1_ = Object.getPrototypeOf(num1);  // Number()
		expect(_proton1_).toEqual(Number.prototype);

		const func3 = function(){};
		const _protof3_ = Object.getPrototypeOf(func3);       // Function()
		expect(_protof3_).toEqual(Function.prototype);

		const class_test = class Test{};
		const _protoc1_ = Object.getPrototypeOf(class_test);  // Function()
		expect(_protoc1_).toEqual(Function.prototype);

		const test_obj = new class_test();
		const _proto_test_ = Object.getPrototypeOf(test_obj);  // Test()
		expect(_proto_test_).toEqual(class_test.prototype);

	}


});