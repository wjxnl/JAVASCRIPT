//sum of two numbers

function sum(a, b){
    s = a + b;      // a and b are local variables.
    return s;
}

let val = sum(3,4);
console.log(val);

// using arrow functions

const add = (x, y) => {
    console.log( x + y);
};
add(1, 2);

//practice1

function vowel(str){
    let count = 0;
    for(let char of str){
        if(
            char === "a" || 
            char === "e" || 
            char === "i" ||
            char === "o" ||
            char === "u" 
        ){
            count++ ;
        }
    }
    console.log(str);
    console.log(count);
    return count;
}
vowel("apnacollege");

//using arrow function

const countVow = (str) => {
    let count = 0;
    for(let char of str){
        if(
            char === "a" || 
            char === "e" || 
            char === "i" ||
            char === "o" ||
            char === "u" 
        ){
            count++ ;
        }
    }
    console.log(str);
    console.log(count);
    return count;
}
countVow("abcde");

//for each loop in arrays
let arr = [1, 2, 3, 4, 5];
arr.forEach(function myFunction(val){
    console.log(val);
});
//using arrow function
arr.forEach((val, idx, arr) =>{
    console.log(val, idx, arr);
}
);

//practice
let numbs= [3, 9, 10];
numbs.forEach((num) => {
    console.log(num * num);
}
);

//or:
let calcSquare = (num) =>{
    console.log(num * num);
};
numbs.forEach(calcSquare);

