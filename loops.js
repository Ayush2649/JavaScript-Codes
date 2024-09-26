// for(let i = 1; i <= 5; i++){
//     console.log(i);
// } // 1, 2, 3, 4, 5

// for(let i = 1; i <= 15; i++){
//     if((i % 2) != 0){
//         console.log(i);
//     }
// } // 1, 3, 5, 7, 9, 11, 13, 15

// for(let i = 0; i < 15; i++){
//     if((i % 2) == 0){
//         console.log(i);
//     }
// } // 0, 2, 4, 6, 8, 10, 12, 14

// for(let i = 0; i < 15; i = i + 2){
//     console.log(i);
// } // 0, 2, 4, 6, 8, 10, 12, 14

// for(let i = 15; i >= 0; i = i - 2){
//     console.log(i);
// }

// let n = prompt("Write your Number : ");
// n = parseInt(n); // Returns the numerical value
// for(let i = n; i <= n * 10; i = i + n){
//     console.log(i);
// } Multiplication Table

// for(let i = 1; i <= 3; i++){
//     console.log(`Outer loop ${i}`);
//     for(let j = 1; j <= 3; j++){
//         console.log(j);
//     }
// } // Nested Lopps

// let i = 5;
// while(i <= 50){
//     console.log(i);
//     i = i + 5;
// }

// let i = 1; 
// while(i <= 5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let fruits = ["Mango", "Apple", "Banana", "Orange", "Litchi"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(i , fruits[i]);
// }

// for(let i = fruits.length - 1; i >= 0; i--){
//     console.log(i, fruits[i]);
// }

// let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// // console.log(nums);
// for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums[1].length; j++){
//         console.log(nums[i][j]);
//     }
// }

// let fruits = ["Mango", "Apple", "Banana", "Orange", "Litchi"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// let heroes = [["Spiderman", "Ironman", "Thor"], ["Superman", "Batman", "Flash"]];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// let num = 287152;
// let count = 0;
// let copy = num;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(count);

// let num = 287152;
// let sum = 0; 
// let copy = num;

// while(copy > 0){
//     let digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }
// console.log(sum);

// let num = 7;
// let fact = 1;

// for(let i = 1; i <= num; i++){
//     fact = fact * i;
// }

// console.log(`Factorial of ${num} is ${fact}`);


// let arr = [2, 5, 1, 7, 10, 100];

// let largest = 0;

// for(let i = 0; i < arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }

// console.log(largest);