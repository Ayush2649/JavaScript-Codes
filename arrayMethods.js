// console.log("Hello World");

let arr = [1, 2, 3, 4, 5];

let print = function(el) {
    console.log(el);
}

// arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

const info = [
    {
        name : "Ayush",
        age : 20,
        marks : 94
    }, 
    {
        name :"Vaibhav",
        age : 20,
        marks : 95
    }, 
    { 
        name : "Swapnil",
        age : 21,
        marks : 80
    }
];

// info.forEach(function(student) {
//     console.log(student.name);
// });

let gpa = info.map((el) => { // Returns a new array of the same of the old array after storing the answers in the array
    return el.marks / 10;
})

// console.log(gpa); // [9.4, 9.5, 8]

let num = [1, 2, 3, 4, 5, 7, 6, 8, 9, 0, 11, 23, 45, 67, 89, 90];

let ans = num.filter((el) => {
    return el % 2 != 0; // If the ans is true it adds the element in the result arr, if not it excludes that element
});

// console.log(ans);

let nums = [2, 4, 6, 8];

let result = nums.every((el) => {
    return el % 2 == 0; // If every element in the array return true then only this method returns true or else false, It is like & Operation
});

// console.log(result);

let result1 = nums.some((el) => {
    return el % 2 != 0; // If any one element returns true value then this method returns true or else false
});

// console.log(result1);

