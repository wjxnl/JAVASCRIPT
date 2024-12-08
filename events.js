//Event: The change in the state of an object is Event.
//event handling in js
let btn1 = document.querySelector("#btn1");
btn1.onclick= () => {
    console.log("button clicked.");
};

let division = document.querySelector(".division");
division.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log("you are inside div");
};

//event listeners
btn2.addEventListener("click", () => {
    console.log("query selector used for button 2: first handler");
}
)

//event handler can be used multiple times for same event
btn2.addEventListener("click", (evt) => {
    console.log(evt);
    console.log("query selector used for button 2: second handler");
}
)

btn2.addEventListener("click", () => {
    console.log("query selector used for button 2: third handler");
}
)

//for removing event
const fouthHandler = () => {         
    console.log("query selector used for button 2: fourth handler"); 
}

btn2.addEventListener("click", (fouthHandler));

    // removing fouth handler
btn2.removeEventListener("click", (fouthHandler));


//pratice
let mode = document.querySelector("#mode");
let currentMode = "light";
let body = document.querySelector("body");

mode.addEventListener("click", () => {
    if(currentMode ==="light"){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
})




