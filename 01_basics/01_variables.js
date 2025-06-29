// 1. Scope Example

/*
Function scope means that a variable declared inside a function can only be accessed within that function, not outside of it.
Variables declared with var are function-scoped.
*/
// function scopeExample() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log("Inside block:", a, b, c);
//   }

//   console.log("Outside block (var a):", a); // ✅ Works
//   console.log("Outside block (let b):", b); // ❌ Error
//   console.log("Outside block (const c):", c); // ❌ Error
// }
// scopeExample();


// // 2. Hoisting Example
// /* 
// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope (before code execution).
// BUT — only the declaration is hoisted, not the initialization (except for var, which is initialized to undefined, let and const are in Temporal Dead Zone(TDZ)).
// */
// function hoistingExample() {
//   console.log("var x:", x); // ✅ undefined (hoisted)
// //   console.log("let y:", y); // ❌ ReferenceError
// //   console.log("const z:", z); // ❌ ReferenceError

//   var x = 10;
//   let y = 20;
//   const z = 30;

//   console.table([x,y,z])
// }
// hoistingExample();


// // 3. Reassignment Example
// function reassignmentExample() {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   a = 10; // ✅
//   b = 20; // ✅
//   // c = 30; // ❌ Error

//   console.log("Reassigned a, b:", a, b);
// }
// reassignmentExample();


// 4. Redeclaration Example
// function redeclarationExample() {
//   var a = 1;
//   var a = 2; // ✅ Redeclare

//   let b = 3;
//   // let b = 4; // ❌ Error

//   const c = 5;
//   // const c = 6; // ❌ Error

//   console.log("Redeclared var a:", a);
//   console.table([a,b,c])
// }
// redeclarationExample();


// 5. Mutating a const object

/*
Mutating means changing the contents or state of an object or array after it has been created — without creating a new object or array.

You cannot mutate primitives (number, string, boolean) because they are immutable.

You can mutate objects and arrays, even if they are declared with const.

| Type         | Mutation Allowed? | Reassignment Allowed?                     | Notes                                                      |
| ------------ | ----------------- | ----------------------------------------- | ---------------------------------------------------------- |
| Primitive    | ❌ No              | ✅ Yes                                     | Can reassign variable, but value immutable                 |
| Object/Array | ✅ Yes             | ✅ Yes (if `let`/`var`), ❌ No (if `const`) | Can mutate properties, reassignment depends on declaration |

*/
function constObjectMutation() {
//   const obj = { name: "Alice" };
//   const objMutated = obj
//   obj.name = "Bob"; // ✅ Allowed

//   console.log("Mutated const object:", obj);
//   console.table([obj,objMutated])

//   // obj = { name: "Charlie" }; // ❌ Error: can't reassign


  // Mutation with const
const arr = [1, 2];
arr.push(3);           // ✅ Allowed - mutates the array
console.log(arr);      // [1, 2, 3]

// Reassignment with const
arr = [4, 5];          // ❌ Error: cannot reassign a const variable

// Reassignment with let
let obj = { a: 1 };
obj = { a: 2 };        // ✅ Allowed - reassigns obj to a new object

// Mutation with let
obj.a = 3;             // ✅ Allowed - mutates existing object

}
constObjectMutation();


