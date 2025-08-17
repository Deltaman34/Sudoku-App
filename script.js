const allGrid = document.querySelectorAll('.Box');

allGrid.forEach((elem) => {
  elem.style.borderLeft = '3px solid black ';
  elem.style.borderTop = '3px solid black ';
  elem.style.borderRight = '3px solid black  ';
  elem.style.borderBottom = '3px solid black ';

  if (elem.classList.contains('delimJ')) {
    elem.style.borderBottom = '10px solid black ';
  }
  if (elem.classList.contains('delim')) {
    elem.style.borderRight = '10px solid black  ';
  }
});
