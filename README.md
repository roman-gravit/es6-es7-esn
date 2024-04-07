
## History 

 - **ECMAScript 2009**, also known as **ES5**, was the first major revision to JavaScript.
 
 - **ECMAScript 2015** was the second major revision to JavaScript. ECMAScript 2015 is also known as **ES6** and ECMAScript 6.

 - Old ECMAScript versions was named by numbers: ES5 and ES6. From 2016, versions are named by year: **ES2016, 2018, 2020..**


### ES6

 - The let keyword

 - The const keyword

 - Arrow Functions

 - Map Objects

 - Set Objects

 - Classes

 - Promises

 - **Symbol**

 - Default Parameters

 - Function Rest Parameter

 - String.includes()  
 
 - **String.startsWith(searchString, startPosition)**
 
 - **String.endsWith(searchString, endPosition)** 

 - Array.from()  keys()  find() findIndex()

 - New Math Methods

 - New Number Properties

 - New Number Methods

 - New Global Methods

 - Object entries

 - JavaScript Modules

 - **Array and Object destructing**

 - The ... Operator

 - For/of

 - **Iterator** : is an object that conforms to the iterator protocol by providing a next() method that returns an iterator result object.

 - **Generator** : object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol. 
                   Generator is a subclass of the hidden Iterator class.


### ES2016

 - Exponentiation ```**```      **Was:**  ```Math.pow(7,2)```   **Now:** ```7**2```

 - Exponentiation assignment (**=)

 - **Array.includes(searchElement, fromIndex)** : determines whether an array includes a certain value among its entries, returning true or false as appropriate.


### ES2017

 - **String.padStart()** : ``` "abc".padStart(10); // "       abc" ```
 
 - **String.padEnd()** :    ``` "abc".padEnd(10); // "abc       "  ```

 - **Object.entries()** : returns an array of a given object's own enumerable string-keyed property key-value pairs
 
 - **Object.values()** :  returns an array of a given object's own enumerable string-keyed property values.

 - async and await

 - **Trailing Commas in Functions:**  Trailing commas (sometimes called "final commas") can be useful when adding new elements,
    parameters, or properties to JavaScript code. If you want to add a new property, you can add a new line without modifying 
    the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing 
    code might be less troublesome.

 - **Object.getOwnPropertyDescriptors** :   returns all own property descriptors of a given object.
      Use this method and Object.create() for a shallow copy between two unknown objects.


### ES2018

 - Asynchronous Iteration

 - Promise Finally

 - Object Rest Properties

 - **New RegExp Features**

 - JavaScript Shared Memory


### ES2019

 - **String.trimStart()** :  removes whitespace from the beginning of this string 
 
 - **String.trimEnd()** : removes whitespace from the end of this string and returns a new string

 - **Object.fromEntries** : transforms a list of key-value pairs into an object

 - Optional catch binding

 - **Array.flat([depth])** : creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

 - **Array.flatMap()** :  It is identical to a map() followed by a flat() of depth 1  ```(arr.map(...args).flat())```

 - Revised Array.Sort()

 - **Revised JSON.stringify()** :  Well-formed JSON.stringify: JSON.stringify('\u{D800}')

 - Separator symbols allowed in string litterals

 - **Revised Function.toString()** : From 2019, toString() must return the source code of the function **including comments, spaces, and syntax details**.


### ES2020

 - BigInt

 - String matchAll()

 - The Nullish Coalescing Operator (??)

 - The Optional Chaining Operator (?.)

 - Logical AND Assignment Operator (&&=)

 - Logical OR Assignment (||=)

 - Nullish Coalescing Assignment (??=)

 - Promise.allSettled()

 - Dynamic Import


### ES2021

 - Promise.any()

 - String replaceAll()

 - **Numeric Separators (_)** : 1_000_000


### ES2022

  - Array at()

  - String at()

  - RegExp /d

  - Object.hasOwn()

  - error.cause

  - await import

  - Class field declarations

  - Private methods and fields


### ES2023

  - Array findLast()  findLastIndex()  toReversed() toSorted()  toSpliced()  with()

  - #! (Shebang)



##  JS scope 

Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: **let** and **const**

   - Block scope
	    Variables declared inside a { } block cannot be accessed from outside the block.
	    Variables declared with the **var** keyword can NOT have block scope.

   - Function(local) scope
		Variables declared within a JavaScript function, are local to the function.
		
		They can only be accessed from within the function. Each function creates a new scope.
		
		Variables defined inside a function are NOT accessible (visible) from OUTSIDE THE FUNCTION.

   - Global scope
        A variable declared outside a function, becomes GLOBAL. In HTML, the global scope is the **window** object.
		
		Global variables defined with the **var** keyword belong to the **window** object.
		
		Global variables defined with the **let** keyword do NOT belong to the **window** object:


NOTE:  Automatically Global:
       If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
	   
	   ```
	   function myFunction() {
	    	carName = "Volvo";
	   }
	   ```


In "Strict Mode", undeclared variables are NOT automatically global.

https://habr.com/ru/companies/lanit/articles/718130/


##  Hoisting

In JavaScript, a variable can be declared after it has been used.

 - let  
    Variables defined with *let*  and *const* are hoisted to the top of the block, but NOT initialized.
	
	Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
    
	Using a *const* variable before it is declared will result in a ReferenceError.
    
	The variable is in a "temporal dead zone" from the start of the block until it is declared:

 - const
    Using a const variable before it is declared, is a syntax error, so the code will simply not run.

 - var
    Using a *var* variable before it is declared will result *undefined*

  NOTE1: JavaScript only hoists declarations, not initializations.


##  Symbol 

Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol 
— that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't 
collide with keys any other code might add to the object, and which are hidden from any mechanisms other 
code will typically use to access the object. 

Every Symbol() call is guaranteed to return a unique Symbol. 
Every Symbol.for("key") call will always return the same Symbol for a given value of "key". 
When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, 
that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry
under the given key, and returned.

	```
	const sym1 = Symbol();
	const sym2 = Symbol("foo");
	const sym3 = Symbol("foo");

	Symbol("foo") === Symbol("foo"); // false

	const sym = new Symbol(); // TypeError
	
	```

The **Symbol.for()** static method searches for existing symbols in a runtime-wide symbol registry 
with the given key and returns it if found. 
Otherwise a new symbol gets created in the global symbol registry with this key.

The method **Object.getOwnPropertySymbols()** returns an array of Symbols and lets you find 
Symbol properties on a given object. Note that every object is initialized with no own Symbol properties, 
so that this array will be empty unless you've set Symbol properties on the object.


##  Data types in JS
   At current moment:
    - string
	- number 
	- BigInt (..n)
	- boolean
	- Symbol
	- Object
	- null  (typeof == object)
	- undefined 	


##  Difference between == and ===
   ==  : abstract equality comparison operator
   === : is the strict equality comparison operator (take care about data types)

   Highly recommended to add strict mode:
   - add *use strict* at the start of the js document
   - add *use strict* at the start of the js function
   - in the ES6 for modules its ON by default


##  Difference between function DECLARATION and function EXPRESSION

The main difference between a function expression and a function declaration is 
the function name, which can be omitted in function expressions to create anonymous functions. 
   
 - Declaration:  use the function keyword and specify a name:
     function sum(a, b) { return a+b; }

 - Expression: - create a function expression and MUST assign it to a variable that can be called. 
     const sum  = function(a, b) { return a+b; }
     const sum2  = (a, b) => { a+b;}  Arrow function expressions

   NOTE: Function expressions in JavaScript are NOT HOISTED. 
         You can't use function expressions before you create them!
		 Therefore, only declared functions can be used before initialization.


##  Difference between null and undefined
   - undefined: the variable was declared but no value was set
   - null: definite set the the value is null (typeof null=='object')


##  What is ES6 modules 

Approach to organize JS code for more convinient work and to maintain the clean global scope of the app.
Main two things:   

- import (from other file)

- export(from this file)

*CommonJS*  *NodeJs*


https://habr.com/ru/companies/ruvds/articles/492510/  [2020]   

https://habr.com/ru/companies/netologyru/articles/351704/ [2018]
