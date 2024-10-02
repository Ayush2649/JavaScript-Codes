// let btn = document.querySelector("button");

// function sayHello() {
//     alert("Hello");
// }

// btn.onclick = sayHello;

// btn.onclick = function () {
//     alert("Hello");
// }

// let btns = document.querySelectorAll("button");

// for(let btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function () {
    //     console.log("The mouse was entered"); // Cannot add more than one functionality for a function
    // }

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName); // Can add multiple functionalities
    // btn.addEventListener("dblclick", function() {
        // console.log("You double cliked me!!");
//     })
// }

// function sayHello() {
//     alert("Hello");
// }

// function sayName() {
//     alert("Ayush Sahu");
// }

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Colour was generated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}