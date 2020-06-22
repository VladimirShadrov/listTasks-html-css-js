dropdown.addEventListener('click', function(event) {
  if (event.target.classList.contains('navigation-dropdown-arrow') || event.target.classList.contains('navigation-dropdown-text')) {
    openMenu()
  }
})

function openMenu() {
  dropdownList.classList.add('active')
  dropdownArrow.style.transform = 'rotate(180deg)';
}

function closeMenu() {
  dropdownList.classList.remove('active')
  dropdownArrow.style.transform = 'rotate(-180deg)';
}

dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    dropdownText.textContent = item.textContent
    closeMenu()
  })
})

