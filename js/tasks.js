function renderNewTask() {
  tasks.forEach(task => {
    const html = `
    <div class="task-list-item">
      <div class="task-list-title">
        <h4 class="task-list-name">${task.title}</h4>
        <button class="task-list-delete">Удалить задачу</button>
      </div>
      <p class="task-list-description">${task.body}</p>
    </div>
    `
    taskParent.insertAdjacentHTML('afterbegin', html)
  });
};