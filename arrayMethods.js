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

let num1 = [1, 2, 3, 4];;
let finalVal = num1.reduce((res, el) => res * el);
// console.log(finalVal); 

// Maximum in array
let array = [1, 2, 3, 90, 4, 5, 6, 100, 7, 8, 9];
let max = -1;

// for(let i = 0; i < array.length; i++){
//     if(max < array[i]){
//         max = array[i];
//     }
// }

// console.log(max);

// USing reduce method

let max1 = array.reduce((max, el) => {
    if(max < el){
        return el;
    } else {
        return max;
    }
});

// console.log(max1);

let arr2 = [10, 20, 30, 0, 40, 50];

let ans1 = arr2.every((el) => {
    return el % 10 == 0;
});

// console.log(ans1);

let arr1 = [1, 2, 3, 4, 5, 6, 0, 7, 8];

let min = arr1.reduce((res, el) => {
    if(res < el){
        return res;
    } else {
        return el;
    }
});

// console.log(min);

// console.log(...arr1); // 1 2 3 4 5 6 0 7 8

// console.log(..."AyushSahu"); // A y u s h S a h u

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let num2 = [...odd, ...even];

// console.log(num2); // [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]