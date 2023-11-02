const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const todoUl = document.querySelector("#items");
const completeUl = document.querySelector(".comDiv ul");


const createTask = function(task) {
  let listItem = document.createElement("li");
  let createInput = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  createInput.type = "checkbox";

  listItem.appendChild(createInput);
  listItem.appendChild(label);

  return listItem;

}

const addTask = function(event) {
  event.preventDefault();
  let lItem = createTask(newTask.value);
  todoUl.appendChild(lItem);
  newTask.value = "";

  bindIncompleteItems(lItem, completeTask)
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deletBTN = document.createElement("button");
    deletBTN.innerText = "delete";
    deletBTN.className = "deleteTask";

    listItem.appendChild(deletBTN);
    
    let checkbox = listItem.querySelector("input[type = 'checkbox']");

    checkbox.remove();

    completeUl.appendChild(listItem);

    bindCompelete(listItem, deleteTask)
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);
}

let bindIncompleteItems = function(taskItem, checkBoxClick) {
  let cBox = taskItem.querySelector("input[type = 'checkbox']");

  cBox.onchange = checkBoxClick;
}

let bindCompelete = function(taskItem, deleteButtonClick) {
    let deleteBTN = taskItem.querySelector(".deleteTask");
  
    deleteBTN.onclick = deleteButtonClick;
  }

  for( i = 0; i < todoUl.children.length; i++ ) {
    bindIncompleteItems(todoUl.children[i], completeTask)
  }

  for( i = 0; i < completeUl.children.length; i++ ) {
    bindCompelete(completeUl.children[i], deleteTask)
  }

  form.addEventListener("submit", addTask)