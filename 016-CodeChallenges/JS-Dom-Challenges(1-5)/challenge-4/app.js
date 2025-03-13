/**
 * Write your challenge solution here
 */

// const darkModeBtn = document.querySelector(".dark-mode");

// darkModeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-theme");

//   darkModeBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
// });


const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const ul = document.getElementById('taskList');
const emptyList = document.querySelector('.empty-list');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
let deleteBtns = document.getElementsByClassName('delete-button');

let totalTaskCount = 0;
let completedTaskCount = 0;

addBtn.addEventListener('click', () => {
    if (input.value === "") return;
    if (ul.contains(emptyList)){
        emptyList.remove();
    };
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'radio');
    checkbox.classList.add('complete-checkbox');
    li.appendChild(checkbox);

    let task = document.createElement('span');
    task.textContent = input.value;
    task.classList.add('task-text');
    li.appendChild(task);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-button');

    li.appendChild(deleteBtn);

    li.classList.add('task-item');
    ul.appendChild(li);

    deleteBtn.addEventListener('click', () => {
        totalTaskCount--;
        li.remove();
        totalTasks.textContent = `Total tasks: ${totalTaskCount}`;
        if (ul.children.length === 0){
            ul.appendChild(emptyList);
        }
    });

    checkbox.addEventListener('change', () => {
        completedTaskCount++;
        li.classList.add('completed');
        completedTasks.textContent = `Completed: ${completedTaskCount}`;
    })

    totalTaskCount++;
    totalTasks.textContent = `Total tasks: ${totalTaskCount}`;

    input.value = "";
});




