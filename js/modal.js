const modalMethods = function () {

  return {
    open(targetElement) {
      targetElement.classList.add('open');
    },

    close(targetElement) {
      targetElement.classList.remove('open');
    },

    delete(targetElement, method) {
      targetElement.removeEventListener('click', method);
      targetElement.remove();
    }
  }
}();

// Функционал диалогового окна о подтверждении изменения задачи

let task

function renderDialogModal(task) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-dialog">
      <div class="modal-dialog-wrapper">
        <h3 class="modal-task-title">Вы уверены, что хотите изменить задачу:</h3>
        <p class="modal-task-description">"${task.title}"?</p>
        <div class="task-list-buttons">
          <button class="change-task" data-number="1">Да</button>
          <button class="delete-task" data-number="0">Отмена</button>
        </div>
      </div>
    </div>
  `);

  document.body.insertAdjacentElement('afterbegin', modal);


  modal.addEventListener('click', function (event) {
    if (+event.target.dataset.number === 0) {
      modalMethods.close(modal);
      setTimeout(() => modalMethods.delete(modal, refineUserAction), 300);
      removeDisabledAttribute(taskListContainer);
    };

    if (+event.target.dataset.number === 1) {
      modalMethods.delete(modal, refineUserAction);
      renderChangeTaskModal(task);
    }
  });

  return modal
};

function removeDisabledAttribute(el) {
  let buttons = el.querySelectorAll('button');
  buttons.forEach(button => button.removeAttribute('disabled'));
}

taskListContainer.addEventListener('click', refineUserAction);

function refineUserAction() {
  let tasks = getArrayTasksFromLS();
  let id = +event.target.closest('.task-list-item').dataset.task;
  task = tasks.find(task => task.id === id);
  if (event.target.classList.contains('change-task')) {
    const modal = renderDialogModal(task);
    setTimeout(() => modalMethods.open(modal), 10);
    event.target.setAttribute('disabled', true);
  }

  return task;
};

// Функционал диалогового окна изменения задачи

function renderChangeTaskModal(task) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  setTimeout(() => modal.classList.add('open'), 50);
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-dialog">
      <div class="modal-dialog-wrapper">
        <h3 class="modal-task-title">Ваша текущая задача:</h3>
        <p class="modal-current-task-description">"${task.body}."</p>
        <div class="modal-new-task-description">
          <h3 class="modal-current-task-title">Новое описание задачи:</h3>
          <textarea class="new-task-description" rows="4"></textarea>
        </div>
        <div class="task-list-buttons">
          <button class="change-task" data-number="1">Изменить</button>
          <button class="delete-task" data-number="0">Отмена</button>
        </div>
      </div>
    </div>
  `);

  document.body.insertAdjacentElement('afterbegin', modal);

  modal.addEventListener('click', function (event) {
    if (+event.target.dataset.number === 0) {
      modalMethods.close(modal);
      setTimeout(() => modalMethods.delete(modal, refineUserAction), 300);
      removeDisabledAttribute(taskListContainer);
    };

    if (+event.target.dataset.number === 1) {
      changeTaskText(task, modal);
    }
  });

  return modal;
};

function changeTaskText(task, targetElement) {
  let textArea = document.querySelector('.new-task-description');
  let value

  if (isTextAreaValid(textArea)) {
    value = textArea.value;
    let tasks = JSON.parse(localStorage.getItem('tasksCatalog'));
    tasks.find(item => {
      if (item.id === task.id) {
        item.body = value;
      }
    });

    localStorage.setItem('tasksCatalog', JSON.stringify(tasks));
    clearTaskListContainer();
    renderNewTask(tasks);

    modalMethods.close(targetElement);
    setTimeout(() => modalMethods.delete(targetElement, renderChangeTaskModal), 300);
    removeDisabledAttribute(taskListContainer);
  }

};

function isTextAreaValid(el) {
  let isValid = true;

  if (el.value === '') {
    isValid = false;
    clearValidationError(el);
    setValidationError(el);
  } else {
    clearValidationError(el);

  }

  return isValid;
}




