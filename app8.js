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

// let body = document.querySelector("body");
// let btn = document.createElement("button");
// body.append(btn);
// btn.innerText = "Click Me!!";
// let btn1 = document.querySelector("button");

// btn1.addEventListener("click", function() {
//     btn1.style.backgroundColor = "green";
// })

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     console.log("Div was clicked");
// });

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event) {
//         event.stopPropagation(); // By using stopPropagation, we can stop the event bubbling
//         console.log("li was clicked");
//     })
// };
// This phenomenon is called Event Bubbling where if an internal child has event listener and its event is triggered then it also triggers the events of parent as well as external elements

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     ul.appendChild(item);
//     inp.value = "";
// })