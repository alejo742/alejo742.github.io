const compImage = document.getElementById('comp-image')
const compText = document.getElementById('comp-text')
function changeCompSelection() {
    var aleatorio = Math.floor(Math.random()*3)
    if(aleatorio == 0){
        compImage.src='./res/piedrita.png'
        compText.innerHTML = 'Piedra'
    }
    else if(aleatorio == 1){
        compImage.src='./res/papelito.png'
        compText.innerHTML = 'Papel'
    }
    else if(aleatorio == 2){
        compImage.src='./res/tijerita.png'
        compText.innerHTML = 'Tijera'
    }
    setTimeout(changeCompSelection, 300)
}

var left = document.getElementById('left')
var right = document.getElementById('right')
var juego = document.getElementById('game')
function showGame() {
    main.style.animation ='moveOutRight 3s ease-in'
    function game() {
        left.style.display = 'none'
        right.style.display = 'none'
        juego.style.display = 'grid'
    }
    setTimeout(game, 2500)
    setTimeout(changeCompSelection, 3000)
}

const opciones = document.querySelectorAll('.opcion')
var o1 = opciones[0]
var o2 = opciones[1]
var o3 = opciones[2]
var o4 = opciones[3]
let selected = null
let aleatorio = false

opciones.forEach(opcion => {
    function select() {
        if(opcion.id == 'piedra') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '8px'
                o2.style.borderWidth = '1px'
                o3.style.borderWidth = '1px'
                o4.style.borderWidth = '1px'
                selected = opcion.id
                aleatorio = false
            }
        }
        else if(opcion.id == 'papel') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '1px'
                o2.style.borderWidth = '8px'
                o3.style.borderWidth = '1px'
                o4.style.borderWidth = '1px'
                selected = opcion.id
                aleatorio = false
            }
        }
        else if(opcion.id == 'tijera') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '1px'
                o2.style.borderWidth = '1px'
                o3.style.borderWidth = '8px'
                o4.style.borderWidth = '1px'
                selected = opcion.id
                aleatorio = false
            }
        }
        else{
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '1px'
                o2.style.borderWidth = '1px'
                o3.style.borderWidth = '1px'
                o4.style.borderWidth = '8px'
                selected = opcion.id
                aleatorio = true
            }
        }
    }
    opcion.addEventListener('click', select)
})


function runChoices(){
    var computerChoice = Math.floor(Math.random()*3)
    var userChoice = selected
    if(aleatorio) {
        userChoice = Math.floor(Math.random()*3)
    }
}