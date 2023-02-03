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

  //*Llenar el sudoku con los valores generados
  let generatedSudoku = generateSudoku()
  console.log(generatedSudoku)

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
    

  //*Eliminar algunas casillas de acuerdo a la dificultad
  function eliminateBoxes(min, max) {
    let eliminar = 81 - randomNumber(min, max)
    let eliminados = 0

    function eliminateRandomBox() {
      let randomNumber = Math.floor(Math.random()*81)
      console.log(randomNumber)
      if(inputs[randomNumber].value != ""){
        inputs[randomNumber].value = ""
        eliminados ++
        return true
      }
    }
    while(eliminar > eliminados) {
      eliminateRandomBox()
    }
  }
  eliminateBoxes(casillas[0], casillas[1])

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

