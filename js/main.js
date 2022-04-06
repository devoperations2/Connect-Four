


/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'black',
    '-1': 'red'
  };
  
  /*----- app's state (variables) -----*/
  let gameBoard;  // 2D Array where the nested arrays rep the columns
  let turn;  // 1 or -1; 0 for nobody home in that cell
  let winner;
  
  /*----- cached element references -----*/
  const markerEls = [...document.querySelectorAll('#markers > div')];
  
  /*----- event listeners -----*/
  document.getElementById('markers').addEventListener('click', handleDrop);
  resetBtn.addEventListener('click', init);
  /*----- functions -----*/
  init();
  
  // initialize state, then call render()
  function init() {
    gameBoard = [
      [0, 0, 0, 0, 0, 0],  // column 0
      [0, 0, 0, 0, 0, 0],  // column 1
      [0, 0, 0, 0, 0, 0],  // column 2
      [0, 0, 0, 0, 0, 0],  // column 3
      [0, 0, 0, 0, 0, 0],  // column 4
      [0, 0, 0, 0, 0, 0],  // column 5
      [0, 0, 0, 0, 0, 0],  // column 6
      

    ];
    turn = 1;
    render();
  }
  
  function render() {
    // Iterate over the column arrays
    gameBoard.forEach(function(colArr, colIdx) {
      colArr.forEach(function(cellVal, rowIdx) {
        const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
        cellEl.style.backgroundColor = COLORS[cellVal];
      });
    });
    renderMarkers(); checkWin();
  }
  
  // hide/show the markers (hide if no 0's exist in that column)
  function renderMarkers() {
    markerEls.forEach(function(markerEl, colIdx) {
      markerEl.style.visibility = gameBoard[colIdx].includes(0) ? 'visible' : 'hidden';
    });
  }
  
  // Update all impacted state, then call render
  function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    if (colIdx === -1) return;
    const colArr = gameBoard[colIdx];
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
    render();
  }


  
// winning logic
function checkWin()  {
for(let i=0; i < gameBoard.length; i++){
  for(let j=0; j < gameBoard[i].length; j++) {
    if(gameBoard[i][j] === turn && gameBoard[i][j+1] === turn && gameBoard[i][j+2] && gameBoard[i][j+3]){
      winner = true
    }

  } 
}

}  










// function checkWin(idx, row) {
  //   let checkIdx = idx;
  //   let theRow = 0;
  //   while (gameBoard[checkIdx] === turn && checkIdx < gameBoard.length) {
  //       theRow++; 
  //       checkIdx = checkIdx + inc;
  //   }

  //   checkIdx = idx - inc;

  //   while (gameBoard[checkIdx] === turn && checkIdx >= 0) {
  //       theRow++; 
  //       checkIdx = checkIdx - inc;
    

//     }
//     if (theRow >= 4) {
//         result = turn;
//     }
// };



//   function render() {
//     markerEls.forEach(function(markerEl, idx) {
//       circleEl.style.backgroundColor = gameBoard[idx];
//     });

//    if (result) {msgEl.innerText = `${result} WINS!`;}
//    else {
//        msgEl.innerText = '';
//    }
//   };

  
//   function handlePlayerTurn(evt) {
//     const idx = parseInt(evt.target.id)
//     if (gameBoard[idx] || result) {
//          return;
// } else{
//     gameBoard[idx] = turn;
//     winner(idx, 1);
//     winner(idx, 4);
//     winner(idx, 5);
//     winner(idx, 6);
//     winner(idx, 7);
//     turn = (turn === PLAYER1) ? PLAYER2 : PLAYER1;}

//     render();
// }
// const msgEl = document.querySelector('h3');



// function handlePlayerTurn(evt) {
//   const idx = parseInt(evt.target.id)
  
//   if (gameBoard[idx] || winner) return;
//   gameBoard[idx] = turn;
//   turn = (turn === PLAYER1) ? PLAYER2 : PLAYER1;
  
//   // winner = getWinner();
  
//   render();

// }

    

// function render() {
//   squareEls.forEach(function(squareEl, idx) {
    
//   });
//   if (winner === null) {
//     msgEl.textContent = `It's ${turn}'s turn!`
//   }
// }




  
  
  
  
  
  