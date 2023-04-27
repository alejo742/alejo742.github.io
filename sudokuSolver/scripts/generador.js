function randomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateSudoku() {
  const board = Array.from({ length: 9 }, () => Array(9).fill(0));

  const fill = (row, col) => {
    if (col === 9) {
      col = 0;
      row++;
      if (row === 9) return true;
    }

    const randomOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);

    for (const num of randomOrder) {
      if (isValid(row, col, num)) {
        board[row][col] = num;
        if (fill(row, col + 1)) return true;
        board[row][col] = 0;
      }
    }

    return false;
  };

  const isValid = (row, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num || board[row][i] === num) return false;
    }

    const boxRowStart = Math.floor(row / 3) * 3;
    const boxColStart = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRowStart + i][boxColStart + j] === num) return false;
      }
    }

    return true;
  };

  fill(0, 0);
  return board;
}

let dificultades = [
  {nombre: 'fácil', casillas: [36, 40]},
  {nombre: 'normal', casillas: [30, 35]},
  {nombre: 'difícil', casillas: [20, 25]}
]
const botonGenerar = document.getElementById('generate-button');

botonGenerar.addEventListener('click', () => {
  const sudoku = document.querySelector('.sudoku-g')
  const inputs = document.querySelectorAll('.inner-box-g')
  const filas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  let generatedSudoku = generateSudoku()
  let initialSudoku = generatedSudoku
  console.log(initialSudoku)
  console.log(generatedSudoku)
  //*Resetear para volver a generar
  inputs.forEach(input => {
    input.removeAttribute('readonly')
    input.style.backgroundColor = 'transparent'
    input.classList.remove('empty-input')
  })

  //*Obtener la dificultad que seleccionó
  function getDifficulty(){
    const select = document.getElementById('select-dificultad')
    for(let i = 0; i < select.children.length; i++) {
      if(select.children[i].selected) {
        return select.children[i].value
      }
    }
  }
  let dificultad = getDifficulty()

  //*Obtener casillas que deben estar llenas de acuerdo a la dificultad
  function getBoxes() {
    let casillas;
    dificultades.forEach(element => {
      if(element.nombre == dificultad) {
        casillas = element.casillas
      }
    })
    return casillas
  }
  let casillas = getBoxes()

  //*Eliminar algunas casillas de acuerdo a la dificultad
  function eliminateBoxes(min, max) {
    let eliminar = 81 - randomNumber(min, max)
    let eliminados = 0
    while(eliminar > eliminados) {
      let random1 = randomNumber(0, 8)
      let random2 = randomNumber(0, 8)
      if(generatedSudoku[random1][random2] != "") {
        let oldValue = generatedSudoku[random1][random2]
        generatedSudoku[random1][random2] = ""
        let modifiedSudoku = generatedSudoku

        //Comparación de sudoku inicial con el resuelto
        function compareSudokus() {
          for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
              if(modifiedSudoku[i][j] !== initialSudoku[i][j]){
                return false
              }
            }
          }
          return true
        }
        if(!compareSudokus) {
          generatedSudoku[random1][random2] = oldValue
        }
        else {
          eliminados++
        }
      }
    }
  }
  eliminateBoxes(casillas[0], casillas[1])

  //*Llenar el sudoku con los valores generados

  for(let i = 0; i < sudoku.children.length; i++) {
    let rowToFill = [];
    inputs.forEach((input) => {
        if(input.id.includes(filas[i])){
            rowToFill.push(input)
        }
    })
    for(let j = 0; j < rowToFill.length; j++) {
        rowToFill[j].value = generatedSudoku[i][j]
    }
  }
    

  //*Evitar que se editen los inputs que están llenos
  inputs.forEach(input => {
    if(input.value != "") {
      input.setAttribute('readonly', true);
      input.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    }
    else {
      input.classList.add('empty-input')
    }
  })
})



