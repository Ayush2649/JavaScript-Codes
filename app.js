// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "spiderman_img.png";
//     console.dir(`The source of the immage ${i} is changed`);
// }

// console.dir(document.getElementById("mainImg"));

// console.dir(document.getElementsByTagName("p"));

// console.dir(document.querySelector("p")); // Return the first occourence of p

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a")); // Returns all the occourances of a in the div

// let para = document.querySelector("p");

// console.dir(para.innerText); // It shows the entire text that is visible in the para

// console.dir(para.innerHTML); // It shows the entire markup of the para

// console.dir(para.textContent); // It shows the text in the way it has been written in the html document

// let img = document.querySelector("#mainImg");

// console.dir(img.getAttribute("id"));

// let links = document.querySelectorAll(".box a");

// for(let link of links){
//     link.style.color = "green";  // When we access the style property from the console we cannot access the css styling we can only see the inline styling
// }

// let heading = document.querySelector("h1");

// heading.classList.add("green"); // Adds the functionalities of green to heading

// heading.classList.remove("green"); // Removes the functionalities of green from heading

// heading.classList.contains("underline"); // Returns true or false

// heading.classList.toggle("green"); // If the attribute already exists in the heading then it wil drop and if not it will add it and return true if it si added and false if it is removed


// let img = document.querySelector("#mainImg");

// console.dir(img.parentElement); // body

// console.dir(img.children); // HTMLCollection(0)

// console.dir(img.previousElementSibling); // h1

// console.dir(img.nextElementSibling); // h2

// let newP = document.createElement("p");

// newP.innerText = "Hi I am a new paragraph";

// console.dir(newP);

// let body = document.querySelector("body");

// body.appendChild(newP); 

// body.append(newP);

// body.prepend(newP);

// body.insertAdjacentElement("beforebegin", newP);

// body.insertAdjacentElement("afterbegin", newP);

// body.insertAdjacentElement("beforeend", newP);

// body.insertAdjacentElement("afterend", newP);

// newP.remove(); // Or we can use removeChild

// let body = document.querySelector("body");

// let p = document.createElement("p");

// p.innerText = "Hey I'm Red!";

// p.style.color = "red";

// body.append(p);

// let h3 = document.createElement("h3");

// h3.innerText = "I'm a blue h3";

// h3.classList.add("h3");

// body.append(h3);

// let div = document.createElement("div");

// div.classList.add("div");

// body.append(div);

// let h1 = document.createElement("h1");

// h1.innerText = "I'm in a div";

// div.append(h1);

// let para = document.createElement("p");

// para.innerText = "Me too";

// div.append(para);

// let btn = document.createElement("button");

// btn.innerText = "Click Me";

// let input = document.createElement("input");

// let body = document.querySelector("body");

// body.append(input);

// body.append(btn);

// input.placeholder = "username";

// btn.id = "btn";

// btn.querySelector("#btn");

// btn.classList.add("btn");

// let h1 = document.createElement("h1");

// h1.innerText = "DOM Practice";

// h1.classList.add("h1");

// body.append(h1);

// let p = document.createElement("p");

// p.innerHTML = "Apna College <b>Delta</b> Batch";

// body.append(p);
