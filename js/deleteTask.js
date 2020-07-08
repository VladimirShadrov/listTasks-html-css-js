taskListContainer.addEventListener('click', function (event) {
  const parent = event.target.closest('.task-list-item');
  const id = parent.dataset.task;

  if (event.target.classList.contains('delete-task')) {
    deleteTaskFromLS(id);
    deleteTaskFromHTML(parent);
  };
});

function deleteTaskFromHTML(el) {
  el.remove();
};

function deleteTaskFromLS(id) {
  let tasks = JSON.parse(localStorage.getItem('tasksCatalog'));
  let task = tasks.find(task => task.id === +id);
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);
  localStorage.setItem('tasksCatalog', JSON.stringify(tasks));

  insertDefaultText(tasks);
};

