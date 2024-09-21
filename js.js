// let pencilPrice = 10;
// let erazorPrice = 5;
// console.log(`The price of the items is ${pencilPrice + erazorPrice} rupees`); //Template Literals

//Arithmetic Operators
// let a = 10;
// let b = 8;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//Unary Operators
// let a = 10;
// console.log(++a); //11
// console.log(a++); //11
// console.log(a);

//Assignment Operators  +=, -=, *=, /=, %=
// let a = 10;
// let b = 5;
// b = a;
// console.log(b); //10

//Comparision Operators
// let age = 18;
// console.log(age > 18); // false
// console.log(age >= 18); // true
// console.log(age < 18); // false
// console.log(age <= 18); // true
// console.log(age != 18); // false
// console.log(age == 18); // true == only compares for values and doesn't checks the data type so for strict comparision we use ===

// === operator
// let n = 5;
// let str = '5';
// console.log(n == str); // True which is unfair so we will use ===
// console.log(n === str); // False
// console.log("123" == 123); // True
// console.log("123" === 123); // False
// console.log('1' == 1); // True
// console.log('1' === 1); // False
// console.log(0 == ' '); // True
// console.log(0 === ' '); // False
// console.log(0 == false); // True
// console.log(0 === false); // False
// console.log(null == undefined); // True
// console.log(null === undefined); // False 

// Conditional Statements
// let light = "orange";
// if(light == "red"){
//     console.log("You have to stop");
// }
// if(light == "orange"){
//     console.log("You can go in a while");
// }
// if(light == "green"){
//     console.log("You can go now");
// }

// let size = "XL";
// if(size == "XL"){
//     console.log("Price is 250");
// } else if(size == "L"){
//     console.log("Price is 200");
// } else if(size == "M"){
//     console.log("Price is 100");
// } else if(size == "S"){
//     console.log("Price is 50");
// }

// let str = "snake";
// if(str.charAt(0) === 'a' && str.length > 3){
//     console.log("It is a good string");
// } else {
//     console.log("It is not a good string");
// }

// let day = 1;
// switch(day) {
//     case 0 : console.log("Sunday");
//     break;
//     case 1 : console.log("Monday");
//     break;
//     case 2 : console.log("Tuesday");
//     break;
//     case 3 : console.log("Wednesday");
//     break;
//     case 4 : console.log("Thursday");
//     break;
//     case 5 : console.log("Friday");
//     break;
//     case 6 : console.log("Saturday");
//     break;
//     default : console.log("Invalid Day");
//     break;
// }

// alert("Danger!!");

// console.log("This is a normal log");
// console.error("This is an error msg");
// console.warn("This is a warning message");

// let firstname = prompt("Please enter your firstname : ");
// let lastname = prompt("Please enter your lastname : ");
// console.log("Welcome " + firstname + " " + lastname + "!");

// let num = 51;
// if((num % 10) === 0){
//     console.log("Good");
// } else {
//     console.log("Bad");
// }

// let pname = prompt("Please enter your name");
// let age = prompt("Please enter your age");
// console.log(`${pname} is ${age} years old`);

// let quater = 1;
// switch(quater){
//     case 1 : console.log("January, February, March");
//     break;
//     case 2 : console.log("April, May, June");
//     break;
//     case 3 : console.log("July, August, September");
//     break;
//     case 4 : console.log("October, November, December");
//     break;
//     default: console.log("Wrong Input");
//     break;
// }

// let str = "Apples";
// if((str.charAt(0) === 'a' || str.charAt(0) === 'A') && str.length > 5){
//     console.log("It is a golden string");
// }

// let a = 4, b = 7, c = 3;
// if((a > b) && (a > c)){
//     console.log("a is greatest");
// } else if((b > a) && (b > c)){
//     console.log("b is greatest");
// } else {
//     console.log("c is greatest");
// }

// let num1 = 32;
// let num2 = 16752;
// if((num1 % 10) == (num2 % 10)){
//     console.log(`${num1} and ${num2} have the same last digit which is ${num1 % 10}`);
// } else {
//     console.log(`${num1} and ${num2} do not have the same last digit`);
// }