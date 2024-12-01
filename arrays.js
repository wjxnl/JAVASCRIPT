let arr = ["apple", "mango", "grapes", "orange"];
console.log(arr);
console.log(arr[0]);
arr[1] = "peach";
console.log(arr);

//for loop
let seasons = ["summer", "winter", "spring", "autumn"];
for(let i = 0; i < seasons.length; i++){
    console.log(seasons[i]);
}

//for of loop
let city = ["kathmandu", "bhaktapur", "pokhara", "dharan"];
for (let index of city){
    console.log(index.toUpperCase());
}

//pratice1
let marks = [85, 97, 44, 37, 76, 60];
sum = 0;
for(let value of marks){
    sum += value;
}
avg = sum/marks.length;
console.log(`The average marks is ${avg}`);

//practice2
let prices = [250, 645, 300, 900, 50];
for(let j=0; j< prices.length; j++){
    offer = prices[j] * 0.1;
    prices[j]-= offer;
}
console.log(prices);

//array methods
let men= ["ram", "shyam", "hari", "yubshan"];

men.push("fate", "fred"); // adds items to array
console.log(men);

let deletedItem = men.pop(); // deletes elements from end and returns a popped items.
console.log(men);
console.log("deleted:", deletedItem);

console.log(men.toString()); //converts array into strings.
 
let women = ["sita", "gita", "rita", "pari"];
console.log(men.concat(women)); //joins multiple arrays.

women.unshift("anusha"); //adds element to the start of arrays 
console.log(women);

let female = women.shift(); //deletes elements from the start of arrays and returns it
console.log(women);
console.log(female);

//slice: returns a piece of array. original array is unaffected
let colors = ["red", "green", "pink", "white", "yellow", "black", "brown"];
console.log(colors.slice(1,4)); //ending index is non exclusive
console.log(colors);

//splice: change original array; add, remove, replace
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);
numbers.splice(2, 2, 101, 102); //(starting number, no of elements to be deleted, add element)
console.log(numbers);

// copying array 
const random = ['a', 'b', 'c']
const copy = random;
const copy2 = [...random];
random[1] = 'd';    
console.log(random);
console.log(copy);
console.log(copy2);

//practice
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
companies.shift(); //removes the first company from array
console.log(companies);
companies.splice(1, 1, "ola"); //removes uber and add ola in its place
console.log(companies);
companies.push("amazon"); //add amazon at the end
console.log(companies);

