// /*

// 1. Different types of datatypes
// 2. Questiosn related to datatypes
// 3. Conversion
// 4. ECMA script based unique conversions
// 5. Important ECMA script rules
// 6. Prefix Postfix
// 7. Tricky and imprtant conversions based topics/questins
// 8. == vs ===
// 9. typeof

// */

// // === PRIMITIVE DATA TYPES ===

// // 1. Number
// let age = 25;
// let price = 99.99;
// let infinityValue = Infinity;
// let notANumber = NaN;

// // 2. String
// let name = "Alice";
// let greeting = `Hello, ${name}!`;

// // 3. Boolean
// let isStudent = true;
// let isLoggedIn = false;

// // 4. Undefined
// let notAssigned;
// // console.log("Undefined value:", notAssigned); // undefined

// // 5. Null
// let emptyValue = null;
// // console.log("Null value:", emptyValue); // null

// // 6. Symbol
// let id = Symbol("uniqueId");
// let anotherId = Symbol("uniqueId");
// // console.log("Symbols are equal?", id === anotherId); // false

// // 7. BigInt (note the 'n' at the end)
// let bigNumber = 1234567890123456789012345678901234567890n;

// // === NON-PRIMITIVE (REFERENCE) DATA TYPES ===

// // 1. Object
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };

// // 2. Array
// let colors = ["red", "green", "blue"];

// // 3. Function
// function greet(name) {
//   return `Hello, ${name}`;
// }

// // console.log(greet("World")); // "Hello, World"

// // 4. Date (built-in object)
// let now = new Date();

// // 5. Map (key-value store)
// // let map = new Map();
// // map.set("key1", "value1");

// // 6. Set (unique values)
// let set = new Set([1, 2, 2, 3]);

// // === OUTPUT ===

// // console.log("=== Primitive Types ===");
// // console.log("Number:", age, price, infinityValue, notANumber);
// // console.log("String:", name, greeting);
// // console.log("Boolean:", isStudent, isLoggedIn);
// // console.log("Undefined:", notAssigned);
// // console.log("Null:", emptyValue);
// // console.log("Symbol Example:", id.toString());
// // console.log("BigInt:", bigNumber);

// // console.log("\n=== Non-Primitive Types ===");
// // console.log("Object:", person);
// // console.log("Array:", colors);
// // console.log("Function Output:", greet("Alice"));
// // console.log("Date:", now);
// // console.log("Map:", map.get("key1"));
// // console.log("Set:", Array.from(set)); // convert set to array for display



// // Create a map
// let map = new Map();

// // Set values
// map.set("name", "Alice");
// map.set(42, "The answer");
// map.set(true, "Boolean key");

// // // Use object as key
// // let objKey = { id: 1 };
// // map.set(objKey, "Object value");

// // // Get values
// // console.log(map.get("name"));    // "Alice"
// // console.log(map.get(42));        // "The answer"
// // console.log(map.get(true));      // "Boolean key"
// // console.log(map.get(objKey));    // "Object value"

// // // Check for keys
// // console.log(map.has("name"));    // true

// // // Map size
// // console.log("Size:", map.size);  // 4

// // // Delete a key
// // map.delete(42);

// // // Loop through map
// // for (let [key, value] of map) {
// //   console.log("Key:", key, "Value:", value);
// // }

// // const map = new Map();
// // map.set("name", "Alice");
// // map.set("age", 30);

// // Print all keys once
// console.log("Keys:", [...map.keys()]);

// // Print all values once
// console.log("Values:", [...map.values()].join(", "));


// let obj1 = new Object();
// obj1.name = "Anshuman"
// obj1.age = 23

// console.log(`obj1 => ${JSON.stringify(obj1)}`)

// obj2 = obj1
// obj2.name = "Anshuman Updated"

// console.log("obj2 =>", obj2)
// console.log(`obj1 => ${JSON.stringify(obj1)}`)

// let a = 10;
// let b = a;  // b gets a copy of the value 10

// b = 20;     // Changing b does NOT affect a

// console.log(a); // 10
// console.log(b); // 20


// const original = {
//   name: "Anshuman",
//   age: 23,
//   address: {
//     city: "Delhi",
//     zip: 110001
//   }
// };

// // Shallow copy using Object.assign
// const shallowCopy1 = Object.assign({}, original);

// // Shallow copy using spread syntax
// const shallowCopy2 = { ...original };

// shallowCopy1.address.city = "Mumbai";

// console.log(original.address.city);   // Output: "Mumbai" (changed!)
// console.log(shallowCopy1.address.city); // Output: "Mumbai"


// const original = {
//   name: "Anshuman",
//   age: 23,
//   address: {
//     city: "Delhi",
//     zip: 110001
//   }
// };

// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.address.city = "Mumbai";

// console.log(original.address.city);  // Output: "Delhi" (unchanged)
// console.log(deepCopy.address.city);  // Output: "Mumbai"


// console.log(1 == "1");    // true 😬 (type coercion)
// console.log(1 === "1");   // false ✅ (strict equality)
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// const values = [
//   false,
//   0,
//   -0,
//   "",
//   null,
//   undefined,
//   NaN,
//   "hello",
//   42,
//   [],
//   {},
//   "0",
//   "false",
//   [0],
// ];

// values.forEach((v) => {
//   if (v) {
//     console.log(`${JSON.stringify(v)} is truthy`);
//   } else {
//     console.log(`${JSON.stringify(v)} is falsy`);
//   }
// });

/*

Falyse values in js:
false
0
-0
0n        // BigInt zero
""        // Empty string
null
undefined
NaN

*/


/*

| Syntax                 | Type                        | Example use                      |
| ---------------------- | --------------------------- | -------------------------------- |
| `function fnc() {}`    | Function declaration        | Defining a named function
        
| `const fnc = () => {}` | Arrow function expression   | Storing a function in a variable 

| `fnc(x => {})`         | Function call with callback | e.g., `forEach`, `map`           |


*/


const obj = {
    val1 : 1, 
    val2 : 2
};
console.log(obj)
obj.val3 = 3

console.log(obj)

const obj1 = {}

obj = obj1
console.log(obj); 
console.log(obj1); 