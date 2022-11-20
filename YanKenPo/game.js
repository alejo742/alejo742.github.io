const compImage = document.getElementById('comp-image')
const compText = document.getElementById('comp-text')
var numAleatorio = Math.floor(Math.random()*3)
function changeCompSelection() {
    if(numAleatorio == 0){
        compImage.src='./res/piedrita.png'
        compText.innerHTML = 'Piedra'
        numAleatorio = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    }
    else if(numAleatorio == 1){
        compImage.src='./res/papelito.png';
        compText.innerHTML = 'Papel';
        const randomNums = [0, 2]
        numAleatorio = randomNums[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
    }
    else if(numAleatorio == 2){
        compImage.src='./res/tijerita.png'
        compText.innerHTML = 'Tijera'
        numAleatorio = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    }
    setTimeout(changeCompSelection, 300)
}

var header = document.getElementById('header')
var left = document.getElementById('left')
var right = document.getElementById('right')
var juego = document.getElementById('game')
function showGame() {
    header.style.animation='moveOutRight 3s ease-in'
    main.style.animation ='moveOutRight 3s ease-in'
    function game() {
        header.style.display = 'none'
        left.style.display = 'none'
        right.style.display = 'none'
        if(right.style.gridTemplateColumns=='none'){
            juego.style.display='flex'
        }
        else {
            juego.style.display = 'grid'
        }
    }
    setTimeout(game, 2500)
    setTimeout(changeCompSelection, 3000)
}

const opciones = document.querySelectorAll('.opcion');
var o1 = opciones[0];
var o2 = opciones[1];
var o3 = opciones[2];
let selected = null;
let aleatorio = false;

opciones.forEach(opcion => {
    function select() {
        if(opcion.id == 'piedra') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '8px'
                o2.style.borderWidth = '1px'
                o3.style.borderWidth = '1px'
                selected = 'piedra'
                aleatorio = false
            }
        }
        else if(opcion.id == 'papel') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '1px'
                o2.style.borderWidth = '8px'
                o3.style.borderWidth = '1px'
                selected = 'papel'
                aleatorio = false
            }
        }
        else if(opcion.id == 'tijera') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '1px'
                o2.style.borderWidth = '1px'
                o3.style.borderWidth = '8px'
                selected = 'tijera'
                aleatorio = false
            }
        }
    }
    opcion.addEventListener('click', select)
})

let playerWins = 0
let compWins = 0
var ganador = null

function runChoices(){
    var computerChoice = compText.innerHTML.toLowerCase()
    var userChoice = selected
    
    console.log(`/Escogiste ${userChoice}`)
    console.log(`Yo escogí ${computerChoice}`)

    //Comparar elecciones
    if(userChoice == computerChoice) {
        alert('¡Es un empate!')
        numAleatorio = 0
    }
    else {
        if(userChoice=='piedra' && computerChoice == 'papel'){
        compWins ++
        alert('¡Gano yo!')
        numAleatorio = 0
    }
    else if(userChoice=='papel' && computerChoice == 'piedra'){
        playerWins ++
        alert('Ganas tú...')
        numAleatorio = 0
    }

    else if(userChoice=='papel' && computerChoice == 'tijera'){
        compWins ++
        alert('¡Gano yo!')
        numAleatorio = 0
    }
    else if(userChoice=='tijera' && computerChoice == 'papel'){
        playerWins ++
        alert('Ganas tú...')
        numAleatorio = 0
    }

    else if(userChoice=='tijera' && computerChoice == 'piedra'){
        compWins ++
        alert('¡Gano yo!')
        numAleatorio = 0
    }
    else if(userChoice=='piedra' && computerChoice == 'tijera'){
        playerWins ++
        alert('Ganas tú...')
        numAleatorio = 0
    }
    }
}