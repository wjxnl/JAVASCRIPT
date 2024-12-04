//Window Object: It is browsers object (not JavaScript's) and is automatically created by browser.

//DOM; Document Object Model

//getElementById
let header = document.getElementById("heading");
console.dir(header);

//getElementByClassName
let contents = document.getElementsByClassName("content");
console.dir(contents);
console.log(contents);

//getElementByTagName
let paragraphs = document.getElementsByTagName("p");
console.dir(paragraphs);

//Query Selector 
let elements = document.querySelector("button"); //1st elements only
console.dir(elements);

    //use . for class and # for class

let elementsAll = document.querySelectorAll("p"); //all elements; returns node list
console.dir(elementsAll);

//practiceOne
let h4 = document.querySelector("h4");
console.dir(h4.innerText);
h4.innerText += " with apna college";
console.dir(h4.innerText);

//practiceTwo
let boxes = document.querySelectorAll( ".box");
console.dir(boxes);
console.dir(boxes[1].innerText);

