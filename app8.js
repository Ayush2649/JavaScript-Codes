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

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("Ayush Sahu", () => { // Callback Hell
//     console.log("Success : Your Data was saved");
//     saveToDb("Hello World", () => {
//         console.log("Success2 : Your Data2 was saved");
//         saveToDb("Hii", () => {
//             console.log("Success3 : Your Data3 was saved")
//         }, () => {
//             console.log("Failure3 : Weak connection : Data3 was not saved");
//         });
//     }, () => {
//         console.log("Failure2 : Weak connection : Data2 was not saved");
//     });
// }, () => {
//     console.log("Failure : Weak connection : Data was not saved");
// });

// function saveToDb(data){
//     return new Promise((success, failure) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             success("success : data was saved");
//         } else {
//             failure("Failure : weak connection");
//         }
//     });
// }

// saveToDb("Ayush Sahu")
// .then((result) => {
//     console.log("Data was saved");
//     console.log("Result of promise : " + result);
//     return saveToDb("Pappu");
// })
// .then((result) => {
//     console.log("Data2 was saved");
//     console.log("Result of promise : " + result);
//     return saveToDb("Chunnu");
// })
// .then((result) => {
//     console.log("Data3 was saved");
//     console.log("Result of promise : " + result);
// })
// .catch((error) => {
//     console.log("Data was not saved");
//     console.log("Error of promise : " + error);
// });

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3){
//                 reject("Promise Rejected");
//             }
//             h1.style.color = color;
//             console.log(`Color was changed to ${color}`);
//             resolve("color changed");
//         }, delay);
//     });
// }

// async function demo() {
//     try{
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     } catch(err) {
//         console.log(err);
//         console.log("Error Caught");
//     }

//     let a = 5;
//     console.log(a);
//     console.log("New number : ", a + 5);
// }

// async function greet() {
//     throw "Weak Connection";
//     return "Hello World";    
// }

// greet()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result is : ", result);
// })
// .catch((err) => {
//     console.log("Promise was rejected with the error : ", err);
// })

// let demo = async () => {
//     return 5;
// }

// function getNum() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }