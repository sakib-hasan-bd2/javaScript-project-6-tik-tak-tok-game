let currentPlayer = 'X';
let gameBord = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const board = document.getElementById('board');
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('button');
  cell.classList = 'cell';
  cell.setAttribute('data-index', i);
  board.appendChild(cell);
  cell.addEventListener('click', cellclick);
}
function cellclick(e) {
  const cell = e.target;
  const cellIndex = parseFloat(cell.getAttribute('data-index'));

  if (gameBord[cellIndex] !== '' || gameActive === false) {
    return;
  }
  gameBord[cellIndex] = currentPlayer;
  // cell.innerHTML = currentPlayer;
  cell.innerText = currentPlayer;
  if (checkWinner()) {
    document.querySelector('.status').innerHTML = `win Player '${currentPlayer}' `;
    gameActive = false;
    heighlightWinner();
    return;
  }
  if (checkDrow()) {
    document.querySelector('.status').innerHTML = `Drow`;
    gameActive = false;
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.querySelector('.status').innerHTML = `Player '${currentPlayer}' turn`;
  
}

function checkWinner() {
  const wincombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return wincombination.some((combination) => {
    const [a, b, c] = combination;
    return gameBord[a] !== '' && gameBord[a] === gameBord[b] && gameBord[a] === gameBord[c];
  })
}

function checkDrow() {
  return gameBord.every((hello) => {
    return hello !== '';
  })
}

function heighlightWinner() {
  const wincombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of wincombination) {
    const [a, b, c] = combination;

    if (gameBord[a] !== '' && gameBord[a] === gameBord[b] && gameBord[a] === gameBord[c]) {

      combination.map((item) => {
        document.querySelector(`.cell[data-index="${item}"]`).classList.add('wining-cell');
      })
      
  }
  }

}
