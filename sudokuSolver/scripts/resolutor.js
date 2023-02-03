//*Visual 
//Restringir a sólo inputs numéricos
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
        return false;
    }
    else{
        return true;
    }
}

//*Funcional
let validSudoku = true;
const sudoku = document.querySelector('.sudoku-r');
const outerBoxes = document.querySelectorAll('.outer-box-r');
const inputs = document.querySelectorAll('.inner-box-r');
const resolveButton = document.getElementById('resolve-button');
const errorMessage = document.getElementById('error-message');

//Mostrar mensaje de error
function showErrorMessage(message) {
    errorMessage.style.display = 'flex';
    errorMessage.children[0].innerHTML = message
}

//(cambiar color de inputs vacíos)
function changeInputTextColor() {
    inputs.forEach(input =>{
        if(input.value == "") {
            input.style.color = 'red'
        }
    })
}
resolveButton.addEventListener('click', changeInputTextColor)

//Chequear si es que hay menos de 17 casillas llenadas (sudoku con múltiples soluciones)
function checkFilledBoxes() {
    var filledBoxes = 0
    inputs.forEach(input => {
        if(input.value != ""){
            filledBoxes++
        }
    })
    if(filledBoxes < 17) {
        validSudoku = false
        showErrorMessage(`Este sudoku no tiene una solución única. Debe tener al menos 17 casillas llenas. Tu sudoku tiene ${filledBoxes} casillas llenas.`)
    }
    else{
        validSudoku = true
    }
}
resolveButton.addEventListener('click', checkFilledBoxes)

//!Resolver
function solveSudoku() {
    if(validSudoku) {
        //*Llenar las casillas vacías de cero
        function fillEmptyInputs() {
            for(let i = 0; i < sudoku.children.length; i++) {
                for(let j = 0; j < sudoku.children.length; j++) {
                    if(sudoku.children[i].children[j].value == ""){
                        sudoku.children[i].children[j].value = "0"
                    }
                }
            }
        }
        fillEmptyInputs()
        
        const filas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
        //*Crear un array 2D para representar el Sudoku
        function getSudokuGrid() {
            let arrayToReturn = []
            for(let i = 0; i < sudoku.children.length; i++) {
                arrayToReturn.push([]);
                let inputsToUse = []
                inputs.forEach(input => {
                    if(input.id.includes(filas[i])) {
                        inputsToUse.push(parseInt(input.value))
                    }
                })
        
                arrayToReturn[i].push(...inputsToUse)
            }
            return arrayToReturn
        }
        let solvedSudoku = getSudokuGrid()
    
        //*Resolver el sudoku
        
        function isValid(board, row, col, k) {
            let noEnFila = !(board[row].indexOf(k) >= 0)
        
            let noEnColumna; 
            for(let i = 0; i < 9; i++) {
                if(board[i][col] != k){
                    noEnColumna = true
                }
                else {
                    noEnColumna = false
                    break
                }
            }
        
            let noEnBox;
            for(let i = 0; i < 9; i++) {
                const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
                const n = 3 * Math.floor(col / 3) + i % 3;
                if(board[m][n] == k) {
                    noEnBox = false
                    break
                }
                else {
                    noEnBox = true
                }
            }
        
            return noEnFila && noEnColumna && noEnBox
        }

        function solve(grid, r=0, c=0){
            if(r == 8 && c == 8) {
                return true
            }
            else if(c == 8) {
                return solve(grid, r+1, 0)
            }
            else if(grid[r][c] != 0) {
                return solve(grid, r, c+1)
            }
            else {
                for(let k = 1; k <= 9; k++){
                    if(isValid(grid, r, c, k)){
                        grid[r][c] = k
                        if(solve(grid, r, c+1)){
                            return true
                        }
                        grid[r][c] = 0
                    }
                }
                return false
            }
        }

        const retorno = solve(solvedSudoku, 0, 0)
        if(!retorno || retorno == null || retorno == undefined) {
            showErrorMessage('Revisa tu sudoku. Es posible que no sea válido.')
        }
        if(solvedSudoku) {
            showErrorMessage('Tu sudoku ha sido resuelto. ¡Recarga la página si quieres resolver otro!')
            resolveButton.style.display = 'none'
        }

        function fillSudoku() {
            for(let i = 0; i < sudoku.children.length; i++) {
                let rowToFill = [];
                inputs.forEach((input) => {
                    if(input.id.includes(filas[i])){
                        rowToFill.push(input)
                    }
                })
                for(let j = 0; j < rowToFill.length; j++) {
                    rowToFill[j].value = solvedSudoku[i][j]
                }
            }
        }
        fillSudoku()
    }

}

resolveButton.addEventListener('click', solveSudoku)