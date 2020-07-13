taskListContainer.addEventListener('click', function (event) {
  const parent = event.target.closest('.task-list-item');
  const id = parent.dataset.task;

  if (event.target.classList.contains('delete-task')) {
    deleteTaskFromLS(id);
    deleteTaskFromHTML(parent);

    let dataFromLS = localStorage.getItem('tasksCatalog');
    insertDefaultText(dataFromLS);
  };
});

function deleteTaskFromHTML(el) {
  el.remove();
};

function getArrayTasksFromLS() {
  let tasks = JSON.parse(localStorage.getItem('tasksCatalog'));
  return tasks;
};

function deleteTaskFromLS(id) {
  let tasks = getArrayTasksFromLS();
  let task = tasks.find(task => task.id === +id);
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);
  localStorage.setItem('tasksCatalog', JSON.stringify(tasks));

  insertDefaultText(tasks);
};

