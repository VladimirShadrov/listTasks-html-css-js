form.addEventListener('submit', function (event) {
  event.preventDefault();
  let newTask;

  if (isValid()) {
    newTask = {
      id: Math.random(),
      completed: false,
      title: form['name-task'].value,
      body: form['task-description'].value
    }

    fields.forEach(field => clearInput(field));
    taskParent.innerHTML = '';
    addNewTask(newTask)
  };
});

function addNewTask(data) {
  tasks.push(data);
  renderNewTask();
};



