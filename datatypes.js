// datatypes in js
// primitive: number, string, boolean, undefined, null, bigInt, symbol
// non-primitive: objects(arrays, functions)

const student = {
    fullName: "Wjxnl",
    age: 15,
    marks: 4.0,
    isPass: true,   //fullName, age, marks, isPass are key
};

student["age"] = student["age"] + 1; //access the age and increase it by 1
//const cannot be updated but the key inside the constant object can be updated

console.log (student);
console.log(student.fullName); //access the components of an object
console.log(student["age"]);