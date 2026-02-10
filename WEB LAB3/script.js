const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('please enter full task');
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Delete';

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteTask);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
        } else {
            span.style.textDecoration = 'none';
        }
    });

    deleteTask.addEventListener('click',  function() {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = '';
}


