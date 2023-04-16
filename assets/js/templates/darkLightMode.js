// Kevin Powells' How to make a website light/dark toggle with CSS & JS https://www.youtube.com/watch?v=wodWDIdV9BY&t=131s
const darkModeToggle = document.querySelector('#dark-mode-toggle');

var darkMode = localStorage.getItem('darkMode');

if (darkMode == 'enabled') {
  enableDarkMode()
}

/*
Check if dark mode is enable
Turn off or on
 */
darkModeToggle.addEventListener('click', function toggleDarkMode() {
  var darkMode = localStorage.getItem('darkMode');

  if (darkMode != 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode () {
  /*
  Add class to body
  Update darkMode key value pair in localStorage
   */
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
};

function disableDarkMode () {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
}