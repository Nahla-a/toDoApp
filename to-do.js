var addButton = document.getElementById("add").addEventListener('click', buttonClick)

function buttonClick(){
    // console.log('test');
    var addNewItem = document.getElementById("newItem").value ;
    var text = document.createTextNode(addNewItem)
    item1.appendChild(text)
    document.getElementById("theForm").appendChild(item1)


}