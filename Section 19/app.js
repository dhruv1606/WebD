let quit = false;
let todoArray = [];
while (quit !== true) {
  let inp = prompt("What do you want to do?");
  if (inp === "quit") quit = true;
  else if (inp === "new") {
    let addItem = prompt("What task do you want to add?");
    console.log(addItem + " added to list");
    todoArray.push(addItem);
  } else if (inp === "list") {
    console.log("***** YOUR TODO LIST *****");
    for (let i = 0; i < todoArray.length; i++) {
      console.log(i + 1 + ". " + todoArray[i]);
    }
    console.log("**************************");
  } else if (inp === "delete") {
    let delItem = prompt("Enter index of task to delete: ");
    todoArray.splice(delItem - 1, 1);
    console.log("Task deleted");
  } else {
    prompt("Incorrect entry. Try again...");
  }
}
