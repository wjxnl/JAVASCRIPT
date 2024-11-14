let a = 5;
let b = 2;
console.log("a =", a, "b =", b);

//arithmetic operators
console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);

//modulus
console.log("a % b", a % b);

//exponential
console.log("a ** b=", a**b); // 5 pow 2

//increment and decrement
a++;
console.log("a++ =", a); //post increment
console.log("--b =", --b); //pre decrement

//assignment operators
console.log("a=", a +=4); //the other operators are -=, *=, %=, **=

//comparision operators
console.log("a==b", a == b); //equals to
console.log("a!=b", a != b); //not equals to
console.log("a===b", a === b); //equals to and datatype
console.log("a!==b", a !== b); //not equals to and datatype
console.log("a>b", a > b); //other are <, >=, <=

//logical operators
let firstCondition = a>b;
let secondCondition = a == 10;
console.log("firstCondition && secondCondition =", firstCondition && secondCondition); // logical AND
console.log("firstCondition || secondCondition =", firstCondition || secondCondition); // logical OR
console.log("!(10<1) =", !(a<b)) // logical NOT