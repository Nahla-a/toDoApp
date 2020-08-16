let taskListItem;
const addButton = document.getElementById("add").addEventListener('click', addTask)

function addTask() {
    // console.log('test');
    let addNewItem = document.getElementById("newItem").value;
    let form = document.getElementById("theForm");
    console.log(addNewItem);

    let taskcheckBox, taskLabel, taskTrashButton;

    // Create a list:
    taskListItem = document.createElement("li");
    taskListItem.id = "item1";

    // Create checkbox:
    taskcheckBox = document.createElement("input");
    taskcheckBox.type = "checkbox";
    taskcheckBox.id = "check";

    // Create a label:
    // taskLabel = document.createElement("label");
    // taskLabel.id = "label"
    // taskLabel.htmlFor = "check";
    // // document.querySelector('#check')
    // textLabel = document.createTextNode(addNewItem);
    // taskLabel.appendChild(textLabel);

    // Create trash button:
    taskTrashButton = document.createElement("button");
    taskTrashButton.id = "clear"
    textTrashButton = document.createTextNode("Clear");
    taskTrashButton.appendChild(textTrashButton);

    // Appending label and checkbox into the list:
    if (addNewItem !== "") {
        taskListItem.appendChild(taskcheckBox);
        // taskListItem.appendChild(taskLabel);


        // Appending the new item:
        taskListItem.appendChild(document.createTextNode(addNewItem));
        form.appendChild(taskListItem);

        // Appending trash into the list:
        taskListItem.appendChild(taskTrashButton);
        taskTrashButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove()
        })

        document.addEventListener('click', function () {
            var complete = document.querySelectorAll('#item');
            complete.style.setProperty("text-decoration", "line-through");
        });
        // document.getElementsById("newItem").value = "";
        // addNewItem = localStorage.setItem("new item", addNewItem);

    }
    else {
        alert("plz enter your new todo");
    }

}

// To add 'checked' symbole when todo item completed:
//  taskListItem = document.querySelectorAll('#item1');
//  taskListItem.style.textDecoration = "line-through";




// To delete all the list:
const delButton = document.getElementById("deleteList").addEventListener('click', (evenet) => {
    event.preventDefault()
    deleteAll();
})

function deleteAll() {
    let taskListItem = document.querySelectorAll('#item1');
    taskListItem.forEach(task => task.remove());
}


