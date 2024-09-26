let todo = [];

let req = prompt("Please enter a request");

while(true){
if(req == "quit"){
    console.log("Quitting the app");
    break;
}

if(req == "list"){
    console.log("-------------");
    for(let i = 0; i < todo.length; i++){
        console.log(i, todo[i]);
    }
    console.log("-------------");
} else if(req == "add"){
    let add = prompt("Please enter the task which you want to add");
    todo.push(add);
    console.log("Task added");
} else if(req == "delete"){
    let del = prompt("Please enter the index you want to delete");
    todo.splice(del, 1);
    console.log("Task deleted");
} else {
    console.log("Wrong request");
}

req = prompt("Please enter a request");
}