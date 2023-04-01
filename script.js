flag = 1;
function checkForWin() {
  var tl, tc, tr, cl, cc, cr, bl, bc, br;
  tl = document.getElementById("tl").value;
  tc = document.getElementById("tc").value;
  tr = document.getElementById("tr").value;
  cl = document.getElementById("cl").value;
  cc = document.getElementById("cc").value;
  cr = document.getElementById("cr").value;
  bl = document.getElementById("bl").value;
  bc = document.getElementById("bc").value;
  br = document.getElementById("br").value;

  output = document.getElementById("turn");

// top row
  if((tl == 'x') || tl == "X" && ((tc == 'x') | tc == 'X') && (tr == 'x' || tr == 'X')){
      turn.innerHTML = "Player X won!";
      document.getElementById('cl').disabled = true;
      document.getElementById('cc').disabled = true;
      document.getElementById('cr').disabled = true;
      document.getElementById('bl').disabled = true;
      document.getElementById('bc').disabled = true;
      document.getElementById('br').disabled = true;
      window.alert('Player X won!');
  }
  // middle row
  else if((cl == 'x') || cl == "X" && ((cc == 'x') | cc == 'X') && (cr == 'x' || cr == 'X')){
      turn.innerHTML = "Player X won!";
      document.getElementById('tl').disabled = true;
      document.getElementById('tc').disabled = true;
      document.getElementById('tr').disabled = true;
      document.getElementById('bl').disabled = true;
      document.getElementById('bc').disabled = true;
      document.getElementById('br').disabled = true;
      window.alert('Player X won!');
  }
  // bottom row
  else if((bl == 'x') || bl == "X" && ((bc == 'x') | bc == 'X') && (br == 'x' || br == 'X')){
      turn.innerHTML = "Player X won!";
      document.getElementById('tl').disabled = true;
      document.getElementById('tc').disabled = true;
      document.getElementById('tr').disabled = true;
      document.getElementById('cl').disabled = true;
      document.getElementById('cc').disabled = true;
      document.getElementById('cr').disabled = true;
      window.alert('Player X won!');
  }
  // left column
  else if((tl == 'x' || tl == 'X') && (cl == 'x' || cl =='X') && (bl == 'x' || bl == 'X')){
    turn.innerHTML = "Player X won!";
    document.getElementById('tc').disabled = true;
    document.getElementById('tr').disabled = true;

    document.getElementById('cc').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bc').disabled = true;
    document.getElementById('br').disabled = true;

    window.alert("Player X won!");
  }
  // center column
  else if((tc == 'x' || tc == 'X') && (cc == 'x' || cc =='X') && (bc == 'x' || bc == 'X')){
    turn.innerHTML = "Player X won!";
    document.getElementById('tl').disabled = true;
    document.getElementById('tr').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bl').disabled = true;
    document.getElementById('br').disabled = true;

    window.alert("Player X won!");
  }
  // right column
  else if((tr == 'x' || tr == 'X') && (cr == 'x' || cr =='X') && (br == 'x' || br == 'X')){
    turn.innerHTML = "Player X won!";
    document.getElementById('tl').disabled = true;
    document.getElementById('tc').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cc').disabled = true;

    document.getElementById('bl').disabled = true;
    document.getElementById('bc').disabled = true;

    window.alert("Player X won!");
  }
  //tl downto br diagonal
  else if((tl == 'x' || tl == 'X') && (cc == 'x' || cc =='X') && (br == 'x' || br == 'X')){
    turn.innerHTML = "Player X won!";
    document.getElementById('tc').disabled = true;
    document.getElementById('tr').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bl').disabled = true;
    document.getElementById('bc').disabled = true;

    window.alert("Player X won!");
  }
  //tr downto bl diagonal
  else if((tr == 'x' || tr == 'X') && (cc == 'x' || cc =='X') && (bl == 'x' || bl == 'X')){
    turn.innerHTML = "Player X won!";
    document.getElementById('tl').disabled = true;
    document.getElementById('tc').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bc').disabled = true;
    document.getElementById('br').disabled = true;

    window.alert("Player X won!");
  }
  /* Test Player O won */
  else if((tl == 'O' || tl == "O") && ((tc == 'O') | tc == 'O') && (tr == 'O' || tr == 'O')){
      turn.innerHTML = "Player O won!";
      document.getElementById('cl').disabled = true;
      document.getElementById('cc').disabled = true;
      document.getElementById('cr').disabled = true;
      document.getElementById('bl').disabled = true;
      document.getElementById('bc').disabled = true;
      document.getElementById('br').disabled = true;
      window.alert('Player O won!');
  }
  // middle row
  else if((cl == 'o' || cl == "O") && ((cc == 'o') | cc == 'O') && (cr == 'o' || cr == 'O')){
      turn.innerHTML = "Player O won!";
      document.getElementById('tl').disabled = true;
      document.getElementById('tc').disabled = true;
      document.getElementById('tr').disabled = true;
      document.getElementById('bl').disabled = true;
      document.getElementById('bc').disabled = true;
      document.getElementById('br').disabled = true;
      window.alert('Player O won!');
  }
  // bottom row
  else if((bl == 'o' || bl == "O") && ((bc == 'o') | bc == 'O') && (br == 'o' || br == 'O')){
      turn.innerHTML = "Player O won!";
      document.getElementById('tl').disabled = true;
      document.getElementById('tc').disabled = true;
      document.getElementById('tr').disabled = true;
      document.getElementById('cl').disabled = true;
      document.getElementById('cc').disabled = true;
      document.getElementById('cr').disabled = true;
      window.alert('Player O won!');
  }
  // left column
  else if((tl == 'o' || tl == 'O') && (cl == 'o' || cl =='O') && (bl == 'o' || bl == 'O')){
    turn.innerHTML = "Player O won!";
    document.getElementById('tc').disabled = true;
    document.getElementById('tr').disabled = true;

    document.getElementById('cc').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bc').disabled = true;
    document.getElementById('br').disabled = true;

    window.alert("Player O won!");
  }
  // center column
  else if((tc == 'o' || tc == 'O') && (cc == 'o' || cc =='O') && (bc == 'o' || bc == 'O')){
    turn.innerHTML = "Player O won!";
    document.getElementById('tl').disabled = true;
    document.getElementById('tr').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bl').disabled = true;
    document.getElementById('br').disabled = true;

    window.alert("Player O won!");
  }
  // right column
  else if((tr == 'o' || tr == 'O') && (cr == 'o' || cr =='O') && (br == 'o' || br == 'O')){
    turn.innerHTML = "Player O won!";
    document.getElementById('tl').disabled = true;
    document.getElementById('tc').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cc').disabled = true;

    document.getElementById('bl').disabled = true;
    document.getElementById('bc').disabled = true;

    window.alert("Player O won!");
  }
  //tl downto br diagonal
  else if((tl == 'o' || tl == 'O') && (cc == 'o' || cc =='O') && (br == 'o' || br == 'O')){
    turn.innerHTML = "Player O won!";
    document.getElementById('tc').disabled = true;
    document.getElementById('tr').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bl').disabled = true;
    document.getElementById('bc').disabled = true;

    window.alert("Player O won!");
  }
  //tr downto bl diagonal
  else if((tr == 'o' || tr == 'O') && (cc == 'o' || cc =='O') && (bl == 'o' || bl == 'O')){
    turn.innerHTML = "Player O won!";
    document.getElementById('tl').disabled = true;
    document.getElementById('tc').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('cr').disabled = true;

    document.getElementById('bc').disabled = true;
    document.getElementById('br').disabled = true;

    window.alert("Player O won!");
  }
  else if((tl == 'o' || tl == 'O' || tl == 'x' || tl == 'X')
    && (tc == 'o' || tc == 'O' || tc == 'x' || tc == 'X')
    && (tr == 'o' || tr == 'O' || tr == 'x' || tr == 'X')
    && (cl == 'o' || cl == 'O' || cl == 'x' || cl == 'X')
    && (cc == 'o' || cc == 'O' || cc == 'x' || cc == 'X')
    && (cr == 'o' || cr == 'O' || cr == 'x' || cr == 'X')
    && (bl == 'o' || bl == 'O' || bl == 'x' || bl == 'X')
    && (bc == 'o' || bc == 'O' || bc == 'x' || bc == 'X')
    && (br == 'o' || br == 'O' || br == 'x' || br == 'X')) {

      turn.innerHTML = "Cat's Game!"
      document.getElementById('tl').disabled = true;
      document.getElementById('tc').disabled = true;
      document.getElementById('tr').disabled = true;

      document.getElementById('cl').disabled = true;
      document.getElementById('cc').disabled = true;
      document.getElementById('cr').disabled = true;

      document.getElementById('bl').disabled = true;
      document.getElementById('bc').disabled = true;
      document.getElementById('br').disabled = true;

      window.alert("Cat's game!");
    }
}

function resetGame(){
  location.reload();
  document.getElementById('tl').value = '';
  document.getElementById('tc').value = '';
  document.getElementById('tr').value = '';

  document.getElementById('cl').value = '';
  document.getElementById('cc').value = '';
  document.getElementById('cr').value = '';

  document.getElementById('bl').value = '';
  document.getElementById('bc').value = '';
  document.getElementById('br').value = '';
}


function clickSquare(elementId){

  if(flag == 1) {
    document.getElementById(elementId).value = "X";
    document.getElementById(elementId).disabled = true;
    document.getElementById('turn').innerHTML = "O's turn";
    flag = 0;
  }
  else {
    document.getElementById(elementId).value = "O";
    document.getElementById(elementId).disabled = true;
    document.getElementById('turn').innerHTML = "X's turn";
    flag = 1;
  }
}
