const input = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const listOfTodo = document.querySelector(".todo-list");
const clearAllButton = document.querySelector(".clear-all-button");


clearAllButton.onclick = () => {
    listOfTodo.innerText = "";
  };
addButton.addEventListener('click', () => {
    if (input.value.trim().length > 0) {
        const items = document.createElement("div");
        const todo_ = document.createElement("input");
        const editButton = document.createElement("button");
        const doneButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        doneButton.innerText = "Done";
        editButton.innerText = "Edit";
        deleteButton.innerText = "Delete";
        todo_.className = 'todo-input';
        deleteButton.className = 'button';
        editButton.className = ' button';
        doneButton.className = ' button';

       
   
        todo_.value = input.value;

        listOfTodo.append(items);
        items.append(todo_);
        items.append(editButton);
        items.append(doneButton);
        items.append(deleteButton);

        todo_.onblur = () => {
            todo_.style.border = 'none';
        }
        input.value = '';
        

        editButton.addEventListener('click', (event) => {
            todo_.focus();
        });

        doneButton.addEventListener('click', () => {
            todo_.style.textDecoration = ' line-through';
            todo_.focus();
        });

        deleteButton.addEventListener('click', () => {
            items.innerText = '';
        });
    }
});

