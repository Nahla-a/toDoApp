const addButton = document.getElementById("add").addEventListener('click', addTask)

function addTask() {
    // console.log('test');
    let addNewItem = document.getElementById("newItem").value;
    let form = document.getElementById("theForm");
    console.log("addNewItem");

    let tasklistItem, taskcheckBox, taskLabel, taskTrashButton, newLine;

    // Create a list:
    taskListItem = document.createElement("li");
    taskListItem.id = "item1";

    // Create checkbox:
    taskcheckBox = document.createElement("input");
    taskcheckBox.type = "checkbox";
    taskcheckBox.id = "check";

    // Create a label:
    taskLabel = document.createElement("label");
    taskLabel.htmlFor = "check";
    textLabel = document.createTextNode("");
    taskLabel.appendChild(textLabel);

    // Create trash button:
    taskTrashButton = document.createElement("button");
    textTrashButton = document.createTextNode("Clear");
    taskTrashButton.appendChild(textTrashButton);

    // Create a newLine:
    space = document.createElement("BR");

    // Appending label and checkbox into the list:
    taskListItem.appendChild(taskcheckBox);
    taskListItem.appendChild(taskLabel);

    // Appending the new item:
    taskListItem.appendChild(document.createTextNode(addNewItem));
    form.appendChild(taskListItem);

    // Appending trash into the list:
    taskListItem.appendChild(taskTrashButton);


    // Appending a new line:
    form.appendChild(space);

}

function createDeleteAllButton() {
    let mainContainer = document.getElementById("container");
    let taskDeleteAll;

    // Create a delete all button:
    taskDeleteAll = document.createElement("button");
    textDeleteAllButton = document.createTextNode("DELETE");
    taskDeleteAll.appendChild(textDeleteAllButton);

    // Appending the delete-all button to the form:
    mainContainer.appendChild(taskDeleteAll);
}
createDeleteAllButton();

