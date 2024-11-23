let obj ={
    item: "bag",
    price: 100,
};
console.log("The cost of", obj.item, "is", obj.price, "rupees");

//template literals
console.log(`The cost of ${obj.item} is ${obj.price} rupees.`);

//escape character
console.log("Apna \n College"); // next line
console.log("Hello \t world"); // tab space

//string methods
let str1= "Learning";
let str2= "Javascript";

console.log(str1.slice(1,5));
console.log(str1.concat(str2));
console.log(str1.replace("Learning", "hello"));
console.log(str2.charAt(5));
