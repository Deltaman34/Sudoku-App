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

//-----------------Sudoku logic implementation-------------------------//
function FindNumber(sk, nums, i, j) {
  if (nums.length === 0) return null;

  let pos = Math.floor(Math.random() * nums.length);
  let num = nums[pos];

  if (
    CheckBox(sk, num, i, j) &&
    CheckRow(sk, num, i) &&
    CheckColumn(sk, num, j)
  ) {
    return num;
  }

  // Try with remaining numbers
  let remaining = nums.filter((_, index) => index !== pos);
  return FindNumber(sk, remaining, i, j);
}

function SudokuGenerator() {
  let sk = Array.from({ length: 9 }, () => Array(9).fill(0));
  let numGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let copyedGried = numGrid.slice();
      let value = FindNumber(sk, copyedGried, i, j);
      if (value !== null) {
        sk[i][j] = value;
      } else {
        return SudokuGenerator(); // Retry from scratch
      }
    }
  }

  return sk;
}

function CheckBox(sk, num, i, j) {
  let startRow = i - (i % 3);
  let startCol = j - (j % 3);

  for (let row = startRow; row < startRow + 3; row++) {
    for (let col = startCol; col < startCol + 3; col++) {
      if (sk[row][col] === num) return false;
    }
  }
  return true;
}

function CheckColumn(sk, num, col) {
  for (let row = 0; row < 9; row++) {
    if (sk[row][col] === num) return false;
  }
  return true;
}

function CheckRow(sk, num, row) {
  for (let col = 0; col < 9; col++) {
    if (sk[row][col] === num) return false;
  }
  return true;
}

console.log(SudokuGenerator());
