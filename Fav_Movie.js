const favmovie = "Lakshya";

let guess = prompt("Guess My Favourite Movie : ");

while((guess != favmovie) && (guess != "quit")){
    guess = prompt("Wrong Answer. Please try again");
}

if(guess == favmovie){
    console.log("Congratulations!!");
}