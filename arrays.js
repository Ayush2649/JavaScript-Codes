// let students = ["Ayush", "Vaibhav", "Prayas"];

// let marks = [99, 82, 47, 76];
// console.log(marks[0]);
// console.log(marks.length);

// let info = ["Ayush", 72, 5.10];
// console.log(info);
// console.log(info[0][0]); //Prints 'A' i.e. the 0th index of the 0th index of Array
// console.log(info[0].length);

// Arrays are mutable
// let fruits = ["mango", "apple", "litchi"];
// fruits[0] = "banana";
// console.log(fruits); // ['banana', 'apple', 'litchi']
// fruits[1] = "papaya";
// console.log(fruits); // ['banana', 'papaya', 'litchi']
// fruits[10] = "pineapple";
// console.log(fruits); // ['banana', 'papaya', 'litchi', empty × 7, 'pineapple']
// console.log(fruits.length);

// let cars = ["Audi", " BMW", "MayBach", "Ferrari"];
// cars.push("Pagani"); // Adds at the end of the array
// console.log(cars); // ['Audi', ' BMW', 'MayBach', 'Ferrari', 'Pagani']
// cars.pop(); // Removes the last element from the array and returns it
// console.log(cars); // ['Audi', ' BMW', 'MayBach', 'Ferrari']
// cars.unshift("Mercedes"); // Adds the element at the front of the array
// console.log(cars); // ['Mercedes', 'Audi', ' BMW', 'MayBach', 'Ferrari']
// cars.shift(); // Removes the first element from the array
// console.log(cars); // ['Audi', ' BMW', 'MayBach', 'Ferrari']

// let start = ["january", "july", "march", "august"];
// start[1] = "june"; // Replaces the elemnt on 1st index with june
// start.shift(); // Removes the first element of the array
// start.unshift("july"); // Adds July to the first of the array
// console.log(start); // ['july', 'june', 'march', 'august']

// let marks = [89, 78, 67, 56, 45];
// console.log(marks.indexOf(45));  // 4
// console.log(marks.includes(89)); // True

// let primary = ["red", "green", "blue"];
// let secondary = ["yellow", "orange", "violet"];
// console.log(primary.concat(secondary)); // ['red', 'green', 'blue', 'yellow', 'orange', 'violet'] Doesn't changes the original array
// console.log(secondary.reverse()); // ['violet', 'orange', 'yellow'] Changes the original Array

// let cars = ["audi", "BMW", "Mercedes", "Pagani"];
// console.log(cars.slice()); // ['audi', 'BMW', 'Mercedies', 'Pagani']
// console.log(cars.slice(2, 3)); // ['Mercedies']
// console.log(cars.slice(2)); // ['Mercedes', 'Pagani']
// console.log(cars.slice(-4)); // ['audi', 'BMW', 'Mercedes', 'Pagani']
// console.log(cars.slice(7)); // []

// let cars = ["audi", "BMW", "Mercedes", "Pagani"];
// console.log(cars.splice(3)); // ['Pagani'] Prints and removes the element
// console.log(cars); // ['audi', 'BMW', 'Mercedes']
// console.log(cars.splice(0, 1)); // ['audi'] Prints and removes 1 element form 0th index
// console.log(cars); // ['BMW', 'Mercedes']
// console.log(cars.splice(0, 0, "Ferrai", "Audi")); // Deletes 0 elements form the 0th index and adds Ferrari and Audi at the 0th index
// console.log(cars); // ['Ferrai', 'Audi', 'BMW', 'Mercedes']
// console.log(cars.splice(1, 0, "Jaguar"));
// console.log(cars); // ['Ferrai', 'Jaguar', 'Audi', 'BMW', 'Mercedes']
// console.log(cars.splice(4, 1, "G-Wagon")); // Used to replace Mercedes which is at 4th position with G-Wagon
// console.log(cars); // ['Ferrai', 'Jaguar', 'Audi', 'BMW', 'G-Wagon']

// let cars = ["Ferrari", "BMW", "Audi", "Mrecedes", "Pagani"];
// console.log(cars); // ['Ferrari', 'BMW', 'Audi', 'Mrecedes', 'Pagani']
// console.log(cars.sort()); // ['Audi', 'BMW', 'Ferrari', 'Mrecedes', 'Pagani']
// let nums = [12, 3, 11, 75, 1, 67];
// console.log(nums.sort()); // [1, 11, 12, 3, 67, 75] This sort method does not sorts numbers directly it first converts the numbers into strings and then compares them so 1 comes first and is followed by 2, 3, 4, ...

// let start = ["january", "july", "march", "august"];
// start.splice(0, 1);
// start.splice(1, 0, "june");
// console.log(start); // ['july', 'june', 'march', 'august']

// let languages = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// languages.reverse();
// console.log(languages.indexOf("javascript")); // 4

// let nums = [[2, 4], [3, 6], [4, 8]];
// console.log(nums); // [Array(2), Array(2), Array(2)]

// let tictactoe = [["X", " ", "O"], [" ", "X", " "], ["O", " ", "X"]];
// console.log(tictactoe);

// let n = prompt("Enter the value of n : ");
// let arr = [7, 9, 0, -2];
// console.log(arr.slice(0, n));
// console.log(arr.slice(-n));

// let str = prompt("please enter a string");
// if(str.length == 0){
//     console.log("String is empty");
// } else {
//     console.log("String is not empty");
// }

// let str = "Ayush";
// let idx = 0;

// if(str[idx] == str[idx].toLowerCase()){
//     console.log("character is lowercase");
// } else {
//     console.log("character is not lowercase");
// }

// let str = prompt("Enter a string");
// console.log(`Original string : ${str}`);
// console.log(`String after removing spaces : ${str.trim()}`);

// let arr =["hello", 2, 23, 64, 96];
// let item = 64;

// if(arr.indexOf(item) != -1){
//     console.log("Item exists in the array");
// } else {
//     console.log("Item does not exists in the array");
// }