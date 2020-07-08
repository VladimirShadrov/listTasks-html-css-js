function renderNewTask(tasksList) {
  tasksList.forEach(task => {
    const html = `
      <div class="task-list-item" data-task = "${task.id}">
        <h3 class="task-list-name">${task.title}</h3>
        <p class="task-list-description">${task.body}</p>
        <div class="task-list-buttons">
          <button class="change-task">Изменить задачу</button>
          <button class="delete-task">Удалить задачу</button>
        </div>
      </div>
    `
    taskListContainer.insertAdjacentHTML('afterbegin', html);
  });
};

function renderDefaultText() {
  const defaultHtml = `<h3 class="task-list-default-value active">Вы пока не назначили ни одной задачи</h3>`;
  taskListContainer.insertAdjacentHTML('afterbegin', defaultHtml);
}

function insertDefaultText(arr) {
  if (!arr.length) {
    renderDefaultText();
  }
}

function clearTaskListContainer() {
  taskListContainer.innerHTML = '';
};


function getTaskFromLS() {
  const tasksFromLS = localStorage.getItem('tasksCatalog');

  if (tasksFromLS !== null) {
    tasks = JSON.parse(tasksFromLS);
    insertDefaultText(tasks);
    renderNewTask(tasks);
    return tasks;
  }

  return [];
}

getTaskFromLS()

function putTaskToLS(task) {
  tasks = getTaskFromLS();
  tasks.push(task);

  localStorage.setItem('tasksCatalog', JSON.stringify(tasks));
  clearTaskListContainer();
  renderNewTask(tasks);
}

