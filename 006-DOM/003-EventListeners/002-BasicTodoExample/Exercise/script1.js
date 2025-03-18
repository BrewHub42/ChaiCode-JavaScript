const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click', () => {
    const value = todoInput.value.trim();
    // console.log(value);

    const li = document.createElement('li');
    li.innerText = value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';

    deleteBtn.addEventListener('click', () => {
        li.remove();
    })

    li.appendChild(deleteBtn);

    todoItemsContainer.appendChild(li);
    todoInput.value = '';
});
