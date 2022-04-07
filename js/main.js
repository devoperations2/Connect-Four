


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
    renderMarkers(); 
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
    render(); 
    checkWin();
    turn *= -1;
     
  }
  
  function checkWin() {
    for(let i=0; i < gameBoard.length -4; i++){
      for(let j=0; j < gameBoard[i].length -4; j++){
        if(gameBoard[i] [j] === turn && gameBoard[i][j+1] === turn && gameBoard[i][j+2] && gameBoard[i][j+3]){
          winner = true
        } else if(gameBoard[i][j] === turn && gameBoard[i+1][j] === turn && gameBoard[i+2][j] === turn && gameBoard[i+3][j]){
          winner = true
        } else if(gameBoard[i][j] === turn && gameBoard[i+1][j+1] === turn && gameBoard[i+2][j+2] === turn && gameBoard[i+3][j+3]){
          winner = true
        } else if(gameBoard[i][j] === turn && gameBoard[i+1][j-1] === turn && gameBoard[i+2][j-2] === turn && gameBoard[i+3][j-3]){
          winner = true
      }
    }
  }
  };

function showWinner() {
 if(checkWin = COLORS.red)
return = true;

else(checkWin = COLORS.black)

}  























    








    






  
  
  
  
  
  