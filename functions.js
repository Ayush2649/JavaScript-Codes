// console.log("Hello World");

function hello() {
    console.log("Hello");
}

// hello();

function print1ton() {
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

// print1ton();

function printPoem() {
    console.log("Twinkle Twinkle Little Star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}

// printPoem();

function diceRoll() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

// diceRoll();

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}

// printInfo("Ayush", 20);

function printSum(a, b){
    console.log(`Sum is ${a + b}`);
}

// printSum(10, 20);

function printAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

// printAvg(10, 20, 30);

function printTable(n) {
    for(let i = n; i <= n * 10; i = i + n){
        console.log(i);
    }
}

// printTable(79);

function print1tonSum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += n;
    }
    return sum;
}

// console.log(print1tonSum(5));

let str = ["Hii", "Hello", "How", "Are", "You??"];

function concat(str) {
    let result = "";

    for(let i = 0; i < str.length; i++){
        result += str[i];
    }

    return result;
}

// console.log(concat(str));

function multipleGreet(func, count) { // Heigher Order Function
    for(let i = 1; i <= count; i++){
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

// multipleGreet(greet, 2);

const calculator = {
    add : function(a, b){
        return a + b;
    },
    subb : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a * b;
    }
};

// console.log(calculator.add(76, 89)); // 165 Method

let str1 = "ayushsahu";
let count = 0;

function vowelCount(str1) {
    for(let i = 0; i < str1.length; i++){
        if(str1.charAt(i) == "a" || str1.charAt(i) == "e" || str1.charAt(i) == "i" || str1.charAt(i) == "o" || str1.charAt(i) == "u"){
            count++;
        }
    }
    return count;
}

// console.log(vowelCount(str1));

let start = 10;
let end = 20;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

// console.log(generateRandom(start, end));

let arr = [5, 7, 9, 10, 2, 3, 4, 15];
let num = 5;

function getNumber(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}

// getNumber(arr, num);

let str2 = "abcdabcdefgggh";

function uniqueChars(str2){
    let ans = "";
    for(let i = 0; i < str2.length; i++){
        let currChar = str2[i];
        if(str2.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

// console.log(uniqueChar(str2));