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