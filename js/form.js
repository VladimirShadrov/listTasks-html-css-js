form.addEventListener('submit', function (event) {
  event.preventDefault();
  let newTask;

  if (isValid()) {
    newTask = {
      id: Math.random(),
      title: form['name-task'].value,
      body: form['task-description'].value
    }

    fields.forEach(field => clearInput(field));
    putTaskToLS(newTask)
  };
});




