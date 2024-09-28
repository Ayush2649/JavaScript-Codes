// console.log("Hi");

const student = { 
    name: "Ayush",
    age: 20,
    eng: 99,
    math: 94,
    sci: 96,
    getAvg() {
        let avg = (this.eng + this.math + this.sci) / 3;
        console.log(`${this.name} got Average marks = ${avg}`);
    } 
}

// console.log(student.getAvg());

// console.log("Hello");
// let a = 5; // If there is any error in try block then catch block is implemented and if no error is there then try statement itself is implemented
// try{
//     console.log(a);
// } catch {
//     console.log("An error occoured. a is not defined");
// }
// console.log("Hii");

const sum = (a, b) => { // Arrow function
    console.log(a + b);
};

// console.log(sum(2, 5));

const cube = (n) => {
    return n*n*n;
}

// console.log(cube(5));

// console.log("Hi there!!");

// setTimeout(() => {
//     console.log("Ayush Sahu");
// }, 4000);

// console.log("I am");

// let id = setInterval(() => { // To stop the intervals give the setInterval an id and then on console write clearInterval(id_name)
//     console.log("Ayush Sahu");
// }, 2000);

// const student1 = {
//     name : "Ayush",
//     age : 20,
//     prop : this, // Window- Bcoz student1 has global scope so its variable will also have global scope
//     getName : function() {
//         console.log(this); // Normal function has this as the info of its calling function since it always looks towards its calling function, in this caseee is student so student info is printed in this
//         return this.name;
//     },
//     getAge : () => {
//         console.log(this); // Arrow Function has the scope similar to its parent's scope i.e. Lexical Scope which in this case is global so here this prints window object and not the student1 object
//         return this.age; // Undefined
//     },
//     // The Lexical Scope is helpful when we want to use a method of window 
//     getInfo1 : function() {
//         setTimeout( () => {
//             console.log(this); // Here this will print the objects of student1, since arrow function looks up to its parent's scope which in this case is function() and its scope is local scope so it will print objects of studnet1
//         }, 2000);
//     },
//     getInfo2 : function() {
//         setTimeout( function() {
//             console.log(this); // Here this will print the objects of window, since normal function looks up to its calling function's scope which in this case is window so it will print objects of window
//         }, 2000);
//     }
// };

// getSquare = n => n * n;

// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

isEven = (n) => {
    if(n % 2 == 0){
        console.log("It is even");
    } else {
        console.log("It is not even");
    }
}

let arr = [1, 2, 3, 4, 5];

const arrayAverage = (arr) => {
    let total = 0;

    for(let number of arr){
        total += number;
    }

    return total / arr.length;
}

// console.log(arrayAverage(arr));