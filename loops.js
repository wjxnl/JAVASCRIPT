// for loop
let sum = 0;
for (let i=0; i<=3; i++){
    console.log(i);
    sum = sum + i;
}
console.log ("sum =", sum);

// while loop
let i=1;
while(i<9){
    console.log("hello world");
    i++;
}

// for of loop ::: used for string and arrays
let str = "Anusha";
for (let i of str){
    console.log("i=", i);
}

//for in loop ::: used for objects and arrays
let student ={
    fullName: "Anusha",
    age: 20,
    gender: "female",
};
for(let i in student){
    console.log("key:", i , "value:", student[i]);
}
 
