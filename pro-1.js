document.querySelector('.add-task-btn').addEventListener('click', function() {
    document.getElementById('addTaskModal').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('addTaskModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('addTaskModal')) {
        document.getElementById('addTaskModal').style.display = 'none';
    }
}

document.querySelector('.save-task-btn').addEventListener('click', function() {
    const title = document.querySelector('.modal-content input[type="text"]').value;
    const description = document.querySelector('.modal-content textarea').value;
    const deadline = document.querySelector('.modal-content input[type="date"]').value;

    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.innerHTML = `<h4>${title}</h4><p>${description}</p><p>Deadline: ${deadline}</p>`;

    document.querySelector('.to-do').appendChild(taskCard);

    document.getElementById('addTaskModal').style.display = 'none';
});