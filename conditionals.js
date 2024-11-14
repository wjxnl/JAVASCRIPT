//if condition
let marks = 40;

if (marks>30){
    console.log("is passed");
}

//if-else
let age = 15;
 if (age > 18){
    console.log("You are elligible to vote.");
 }
 else{
    console.log("You aren't elligible to vote.")
 }

 //else-if
 let num = 0;
 if(num > 0){
    console.log("The number is positive");
 }
 else if(num < 0){
    console.log("The number is negative.");
 }
 else{
    console.log("The number is zero.");
 }

// ternary operator: condition? true output: false output
 let salary = 2000;
standard = salary > 1000? "rich": "poor"; 
console.log("The person is", standard);

let iq = 100;
iq > 120? console.log("extra-ordinary"): console.log("average");
