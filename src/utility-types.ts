export {};

type TypeA = {
	name: string;
	surname: undefined;
	age?: number;
	address: {
		street: {
			name: string;
			addiotional?: string;
		};
		city?: string;
		house: number;
		buidling: null;
	}
}

// Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.


declare function f1(arg: { a: number; b: string }): void;

// functions
// ReturnType, Parameters, ConstructorParameters
{
	// [options: console.ConsoleConstructorOptions]
	type T__0 = ConstructorParameters<console.ConsoleConstructor>

	// Parameters<Type>
	// Constructs a tuple type from the types used in the parameters of a function type Type.
	
	// []
	type T_0 = Parameters<() => string>;

	// [s: string]
	type T_1 = Parameters<(s: string) => void>;

    //  [arg: { a: number; b: string; }]
	type T_3 = Parameters<typeof f1>;

	// [message?: any, ...optionalParams: any[]]
	type T_4 = Parameters<typeof console.log>;


	// ReturnType<Type> 
	// Constructs a type consisting of the return type of function Type.
	
	// string
	type T0 = ReturnType<() => string>;

	// unknown
	type T2 = ReturnType<<T>() => T>;

	// void
	type T3 = ReturnType<typeof console.log>;

	// boolean
	type T4 = ReturnType<typeof window.confirm>;

}


// - Woring with Unions
// Exclude, Extract, NonNullable
{

	// string | number remains
	type T = NonNullable<string | number | undefined>;

	// type Exclude<T, U> = T extends U ? never : T;

	// B and C remains
	type T0 = Exclude<"A" | "B" | "C", "A">;

	// C remains
	type T1 = Exclude<"A" | "B" | "C", "A" | "B">;

	// type Extract<T, U> = T extends U ? T : never;

	// A remains
	type T3 = Extract<"A" | "B" | "C", "A" | "F">;

	// (() => void)   remains
	type T4 = Extract<string | number | (() => void), Function>;

}

//  - Change object structure
// Pick, Omit
{

	type Pick2<T, K extends keyof T, K2 extends keyof T[K]> = {
		[P in K]: {
			[P2 in K2]: (T[K])[P2]; 
		};
	};

	type Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	/**
	 * Can Peak only first level!
	 */
	type PickTypeA = Pick<TypeA, "age">;

	/**
	 * Can Peak only second level!
	 */
	type PickSecondLevelTypeB = Pick2<TypeA, "address", "city">;


	/**
	 * Can Omit only first level!
	 */
	type OmitTypeA = Omit<TypeA, "address">;

}


// - Change property descriptors
// Readonly, Required, Partial
{
	/**
	 * Make properties as readonly. ONLY first level!
	 */
	type ReadonlyTypeA = Readonly<TypeA>;

	/**
	 * Make properties as required. ONLY first level!
	 */
	type RequiredTypeA = Required<TypeA>;

	/**
	 * Make properties as optional. ONLY first level!
	 */
	type OptionalTypeA = Partial<TypeA>;
}


// - String type restrictions
// Uppercase, Lowercase, Capitalize, Uncapitalize
{
	type AddressU= {
		city: string;
		country: Uppercase<string>;
	}
	const addressU: AddressU = {
		city: "Boston",
		country: "USA"  // error if any letter is lowercase
	};

	type AddressL= {
		city: string;
		country: Lowercase<string>;
	}
	const addressL: AddressL = {
		city: "Boston",
		country: "usa"  // error if any letter is uppercase
	};

	// error if first letter is not capitalized
	let addressC: Capitalize<string> = "Boston";

	// error if first letter is capitalized
	let addressUnC: Uncapitalize<string> = "bOstOn";
}

