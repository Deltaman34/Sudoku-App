const allGrid = document.querySelectorAll('.Box');
const Container = document.querySelector('.container');
const boxNumbers = document.querySelector('.numbox');
let row, column;
let selected,
  checkSel = false;

//Create borders for every number
allGrid.forEach((elem) => {
  elem.style.borderLeft = '3px solid black ';
  elem.style.borderTop = '3px solid black ';
  elem.style.borderRight = '3px solid black  ';
  elem.style.borderBottom = '3px solid black ';

  if (elem.classList.contains('delimJ')) {
    elem.style.borderBottom = '5px solid black ';
  }
  if (elem.classList.contains('delim')) {
    elem.style.borderRight = '5px solid black  ';
  }
});

function PutNum(e) {
  //Check if it's string number
  const isNumeric = (string) => /^[1-9]$/.test(string);
  if (isNumeric(e.key)) selected.innerText = e.key;
}
function PutNumClick(e) {
  if (!e.target.classList.contains('numbox'))
    selected.innerText = e.target.innerText;
}
//Select box
function SelectGrid(e) {
  if (checkSel) {
    selected.style.backgroundColor = 'white';
    checkSel = false;
  }
  allGrid.forEach((elem) => {
    if (elem === e.target) {
      elem.style.backgroundColor = '#38DC70';
      selected = elem;
      checkSel = true;
    }
  });
  //Change value for selected box
  document.addEventListener('keypress', PutNum);
  boxNumbers.addEventListener('click', PutNumClick);
}

Container.addEventListener('click', SelectGrid);
