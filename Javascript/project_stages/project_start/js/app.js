//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTasksList = document.getElementById('incomplete-tasks'); //incompelete-tasks
var completedTasksList = document.getElementById('completed-tasks'); //compeleted-tasks

//Create new task list item
var createNewTaskElement = function( taskString ) {
  var listItem = document.createElement("li");
  //input checkbox
  var checkbox = document.createElement("input");
  //label #new-text
  var label = document.createElement("label");
  //edit input
  var editInput = document.createElement("input");
  //button Edit
  var editButton = document.createElement("button");
  //button delete
  var deleteButton = document.createElement("button");

  //modify elements
  checkbox.type = 'checkbox';
  editInput.type = 'text';
  editButton.innerText ='Edit';
  editButton.className = 'edit';
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';
  label.innerText = taskString;

  //append elements to listItem
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};

//Add a new task
var addTask = function() {
  //When button pressed
  //create a new list item with the text from #new-task

  var listItem = createNewTaskElement(taskInput.value);
  if ( taskInput.value != '' ) {
    //Append task list item to the #incomplete-tasks list
    incompleteTasksList.appendChild(listItem);
    //bind task events
    bindTaskEvents(listItem, completeTask);
    //clear input area
    taskInput.value = '';
  }
};

//Edit a task
var editTask = function() {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector('input[type=text]');
  var labelInput = listItem.querySelector('label');
  var containsClass = listItem.classList.contains('editMode');
//If class of parent is .editMode
  if ( containsClass ) {
  //Make label's text be input's value
  labelInput.innerText = editInput.value;
  this.innerText = 'Edit';
  } else {
  //input value becomes label's text
  editInput.value = labelInput.innerText;
  this.innerText = 'Save';
  }
  listItem.classList.toggle('editMode');
};

//Delete a task
var deleteTask = function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //remove parent list item from the unordered list
  ul.removeChild(listItem);
};

//Mark a task complete
var completeTask = function() {
  console.log("in completeTasks");
  var listItem = this.parentNode;
  //Append task list item to the #completed-tasks list
  completedTasksList.appendChild(listItem);
  //bind task events
  bindTaskEvents(listItem, incompleteTask);
};

//Mark a task incomplete
var incompleteTask = function() {
  console.log("in incompleteTask");
  var listItem = this.parentNode;
  //Append task list item to the #incompleted-tasks list
  incompleteTasksList.appendChild(listItem);
  //bind task events
  bindTaskEvents(listItem, completeTask);
};

var bindTaskEvents = function( taskListItem, checkboxEventHandler ) {
  console.log("bind task events");
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  //bind checkboxEventHandler to checkbox
  checkbox.onchange = checkboxEventHandler;
};

//Set the click handler to the add task function
addButton.addEventListener( 'click', addTask );

//Cycle over incompleteTasksList list items
for (var i = 0; i < incompleteTasksList.children.length; i += 1) {
  //bind the task events
  bindTaskEvents( incompleteTasksList.children[i], completeTask );
  }

//Cycle over completeTasksList list items
for (var i = 0; i < completedTasksList.children.length; i += 1) {
  //bind the task events
  bindTaskEvents( completedTasksList.children[i], incompleteTask );
  }
