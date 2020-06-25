function isValid() {
  let formIsValid = true;

  fields.forEach(field => {
    if (field.value === '') {
      formIsValid = false;
      clearValidationError(field);
      setValidationError(field);
    } else {
      clearValidationError(field);
    }
  })

  return formIsValid
}


function clearValidationError(el) {
  el.style.border = 'none';
  el.style.marginTop = '15px';
  if (el.previousElementSibling.tagName.toLowerCase() === 'p') {
    el.previousElementSibling.remove();
  }
}

function setValidationError(el) {
  el.style.border = '1px solid red';
  const html = '<p>Это поле обязательно для заполнения!!!</p>';
  el.insertAdjacentHTML('beforeBegin', html)
  const p = el.previousElementSibling;

  p.style.color = 'red';
  p.style.fontSize = '14px';
  el.style.marginTop = '3px';
}


function clearInput(el) {
  el.value = '';
}
