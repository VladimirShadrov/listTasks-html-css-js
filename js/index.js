const dropdown = document.querySelector('.navigation-dropdown');
const dropdownList = document.querySelector('.navigation-dropdown-list');
const dropdownArrow = document.querySelector('.navigation-dropdown-arrow')
const dropdownItems = Array.from(document.querySelectorAll('.navigation-dropdown-item'));
let dropdownText = document.querySelector('.navigation-dropdown-text');
const form = document.querySelector('.create-task-form');
const formTitle = document.querySelector('.create-task-form h2');
const taskName = document.querySelector('.create-task-name');
const taskDescription = document.querySelector('.create-task-description');
const taskSubmit = document.querySelector('.create-task-submit')
const taskListContainer = document.querySelector('.task-list-wrapper');
const fields = document.querySelectorAll('.field');
const navigation = document.querySelector('.navigation');
const navigationTitle = document.querySelector('.navigation-title');

let theme;

function setTheme() {
  let dropdownValue = localStorage.getItem('theme');
  dropdownText.textContent = dropdownValue || 'Тема по умолчанию';
  theme = dropdownText.textContent;

  return dropdownText.textContent;
};

setTheme();

function changeTheme() {
  switch (theme) {
    case 'Темная тема': {
      setDarkTheme();
      break
    }
    case 'Светлая тема': {
      setLightTheme();
      break
    }
    default: {
      setDefaultTheme();
    }
  }
};

function setDefaultTheme() {
  document.body.style.backgroundColor = 'lightgrey';
  navigation.style.backgroundColor = '#007bff';
  navigationTitle.style.color = '#fff';
  dropdown.style.backgroundColor = 'lightgrey';
  dropdownList.style.backgroundColor = 'lightgrey';
  taskName.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  taskDescription.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  taskSubmit.style.backgroundColor = '#007bff';
  taskSubmit.style.color = 'rgba(255, 255, 255, 1)';
  form.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  formTitle.style.color = 'rgba(105, 105, 105, 1)';
  taskListContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  taskListContainer.style.color = 'rgba(0, 0, 0, 0.8)';
};

function setDarkTheme() {
  document.body.style.backgroundColor = 'rgba(48, 48, 48, 1)';
  navigation.style.backgroundColor = 'rgba(0, 0, 0, 1)';
  navigationTitle.style.color = '#fff';
  dropdown.style.backgroundColor = 'lightgrey';
  dropdownList.style.backgroundColor = 'lightgrey';
  taskName.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  taskDescription.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  taskSubmit.style.backgroundColor = '#007bff';
  taskSubmit.style.color = 'rgba(255, 255, 255, 1)';
  form.style.backgroundColor = 'rgba(96, 96, 96, 1)';
  formTitle.style.color = 'rgba(255, 255, 255, 1)';
  taskListContainer.style.backgroundColor = 'rgba(96, 96, 96, 1)';
  taskListContainer.style.color = 'rgba(255, 255, 255, 0.8)';
};

function setLightTheme() {
  document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  navigation.style.backgroundColor = 'rgba(135,206,250, 1)';
  navigationTitle.style.color = '#000';
  dropdown.style.backgroundColor = '#fff';
  dropdownList.style.backgroundColor = '#fff';
  taskName.style.backgroundColor = 'rgba(205, 205, 205, 0.5)';
  taskDescription.style.backgroundColor = 'rgba(205, 205, 205, 0.5)';
  taskSubmit.style.backgroundColor = 'rgba(135,206,250, 1)';
  taskSubmit.style.color = 'rgba(0, 0, 0, 0.8)';
  form.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  formTitle.style.color = 'rgba(105, 105, 105, 1)';
  taskListContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  taskListContainer.style.color = 'rgba(0, 0, 0, 0.8)';
};

changeTheme();

