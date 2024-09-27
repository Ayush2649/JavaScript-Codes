const max = prompt("Enter the maximum number : ");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number : ");

while(true){
    if(guess == "quit"){
        console.log("Quitting the game");
        break;
    }

    if(guess == random){
        console.log(`Conratulations!! You have entered the right number ${random}`);
        break;
    } else if(guess < random){
        guess = prompt("Hint : You have entered a small number. Please guess a larger one");
    } else {
        guess = prompt("Hint : You have entered a large number. Please guess a smaller one");
    }
}