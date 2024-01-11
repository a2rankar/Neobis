
document.addEventListener('DOMContentLoaded', function() {
   
    loadTasks();


    document.getElementById('addButton').addEventListener('click', addTask);
});
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    var trimmedInput = taskInput.value.trim();

    if (trimmedInput !== '') {
        var newTask = document.createElement('li');
        newTask.innerHTML = '<span class="task-text">' + trimmedInput + '</span>' +
                            '<div class="task-actions">' +
                                '<button class="toggle-button">Toggle</button>' +
                                '<button class="remove-button">Remove</button>' +
                            '</div>';
        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        alert("Введите задачу");
    }
}

function toggleTask(button) {
    var taskText = button.parentNode.parentNode.querySelector('.task-text');
    taskText.classList.toggle('completed');
}
function toggleCompleted() {
    var taskList = document.getElementById('taskList');
    var tasks = taskList.querySelectorAll('.task-text');
    
    tasks.forEach(function(task) {
        task.classList.toggle('completed');
    });
}
function addNew(button) {
    var taskList = document.getElementById('taskList');
    var addItem = button.parentNode.parentNode;
    taskList.getElementById("addButton")
}
function removeTask(button) {
    var taskList = document.getElementById('taskList');
    var listItem = button.parentNode.parentNode;
    taskList.removeChild(listItem);
}
function clearAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}


document.getElementById('taskList').addEventListener('click', function(event) {
    var target = event.target;

    if (target.classList.contains('toggle-button')) {
        toggleTask(target);
    } else if (target.classList.contains('remove-button')) {
        removeTask(target);
    }
});
