var actionButton = document.getElementById('actionButton');

actionButton.addEventListener('click', function() {
    alert('you clicked a button');
});

var todoArray = ['Walk the dog', 'Buy Groceries', 'Study for test'];
var todoList = document.getElementById('todoList');
var listItem = null;
for (var i = 0; i < todoArray.length; i++) {
    listItem = document.createElement('li');
    listItem.innerHTML = todoArray[i];
    todoList.appendChild(listItem);
}