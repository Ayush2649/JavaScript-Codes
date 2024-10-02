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

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("Colour was generated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.color = "blue";
// };

// btn.addEventListener("click", changeColor)

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hii ${user.value}, your password is set to ${pass.value}`);
// })

// let inp = document.querySelector("input");
// let h1 = document.querySelector("h1");

// inp.addEventListener("change", function() {
//     console.log(inp.value);
//     h1.innerText = inp.value;
// });

let body = document.querySelector("body");
let btn = document.createElement("button");
body.append(btn);
btn.innerText = "Click Me!!";
let btn1 = document.querySelector("button");

btn1.addEventListener("click", function() {
    btn1.style.backgroundColor = "green";
})