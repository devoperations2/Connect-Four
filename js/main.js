 
const COLORS = {
    '0': 'white',
    '1': 'black',
    '-1': 'red'
  };
  
   
  let gameBoard;   
  let turn;   
  let winner;
  
  
   
  const markerEls = [...document.querySelectorAll('#markers > div')];
  const messageEl = document.querySelector("h2")
 


   
  document.getElementById('markers').addEventListener('click', handleDrop);
  resetBtn.addEventListener('click', init);
   
  init(); 

  
   
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
    clearMsg();
    render();
  }
  
  function render() {
    
    gameBoard.forEach(function(colArr, colIdx) {
      colArr.forEach(function(cellVal, rowIdx) {
        const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
        cellEl.style.backgroundColor = COLORS[cellVal];
      });
    });
    renderMarkers(); 
  }
  
  
  function renderMarkers() {
    markerEls.forEach(function(markerEl, colIdx) {
      markerEl.style.visibility = gameBoard[colIdx].includes(0) ? 'visible' : 'hidden';
    });
  }
  
  function renderWinner() {
    messageEl.innerHTML = `The winner is ${COLORS[turn]}!`;
    resetBtn.style.visibility = 'visible';
   

  }
  
  
  function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    if (colIdx === -1) return;
    const colArr = gameBoard[colIdx];
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    render(); 
    getWinner(colIdx, rowIdx);
    winner = getWinner(colIdx, rowIdx);
    if(winner){
    renderWinner();
    }  
    turn *= -1;
     
  }
  

  function getWinner(colIdx, rowIdx) {
    return checkVertWin(colIdx, rowIdx)
      || checkHorzWin(colIdx, rowIdx);
  }  

  function checkVertWin(colIdx, rowIdx) {
      const player = gameBoard[colIdx][rowIdx];
      
      let count = 1;
       
      let idx = rowIdx + 1;  
      while (idx < gameBoard[colIdx].length && gameBoard[colIdx][idx] === player) {
        count++;
        idx++;
      }
      idx = rowIdx - 1;  
      while (idx >= 0 && gameBoard[colIdx][idx] === player) {
        count++;
        idx--;
      }
      return count === 4
      
    }

    
    function checkHorzWin(colIdx, rowIdx) {
      const player = gameBoard[colIdx][rowIdx];
      let count = 1;
       
      let idx = colIdx + 1;  
      while (idx < gameBoard.length && gameBoard[idx][rowIdx] === player) {
        count++;
        idx++;
      }
      idx = colIdx - 1;  
      while (idx >= 0 && gameBoard[idx][rowIdx] === player) {
        count++;
        idx--;
      }
      return count >= 4 
    }


    function checkDiagRight(colIdx, rowIdx) {
      const player = gameBoard[colIdx][rowIdx];
      let count = 1;
       
      let idx1 = colIdx - 1;
      let idx2 = rowIdx + 1;
      while (idx1 >= 0  && idx2 < gameBoard[0].length && gameBoard[idx1][idx2] === player) {
        count++;
        idx1--;
        idx2++;
      }
      idx1 = colIdx + 1;
      idx2 = rowIdx - 1
      while (idx1 < gameBoard.length && idx2 >= 0 && gameBoard[idx1][idx2] === player) {
        count++;
        idx1++;
        idx2--;
      }
      return count >= 4 
    }
    
    
    function clearMsg(){
    messageEl.innerHTML="";


    }
    
    
    
    
    
    
    
    
    
    
    
    








    // function checkForwardSlash(colIdx, rowIdx) {
    //   const player = gameBoard[colIdx][rowIdx];
    //   let count = 1; 
    //   //count right
    //   let idx1 = colIdx - 1;// initialize to one above 
    //   let idx2 = rowIdx + 1;
    //   while (idx1 >= 0  && idx2 < gameBoard[0].length && gameBoard[idx1][idx2] === player) {
    //     count++;
    //     idx1--;
    //     idx2++;
    //   }
    //   idx1 = colIdx + 1; // initialize to one above 
    //   idx2 = rowIdx - 1
    //   while (idx1 < gameBoard.length && idx2 >= 0 && gameBoard[idx1][idx2] === player) {
    //     count++;
    //     idx1++;
    //     idx2--;
    //   }
    //   return count === 4 
    // }
   

    
   
   


  
  
  
  