//MAP: creates a new array with the result of some operations

let num=[2, 4, 6];
let newArr = num.map((val) =>{
     return(val*val);
});
console.log(newArr); 
console.log(num); //no change to original array

//Filter: creates a new array of elements that give  true for a condition

let data= [1, 3, 2, 6, 9, 8];
evenData = data.filter((val) =>{
    return val % 2 ===0;
});
console.log(evenData);
console.log(data);

//REDUCE: performs some operations and reduces the array to a single value.

let arr= [1, 9, 2, 3];
reducedValue = arr.reduce((res, current) =>{
    return res + current;
});
console.log(reducedValue);

let numbers= [1, 9, 2, 3];
largestValue = numbers.reduce((res, current) =>{
    return res>current? res : current;
});
console.log(largestValue);

//practice1
let marks = [60, 80, 83, 92, 97, 40];
let toppers = marks.filter((obmarks) =>{
    return obmarks > 90;
});
console.log(toppers);

//practice2
let input = prompt("enter number");
let array = [];

for(let i=1; i <=input; i++){
    array[i-1] = i;
}
console.log(array);

sum = array.reduce((prev, curr) =>{
    return prev + curr;
});
console.log("sum is:", sum);

product = array.reduce((prev, curr) =>{
    return prev * curr;
});
console.log("product is:", product);


