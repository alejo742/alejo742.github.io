const opciones = document.querySelectorAll('opcion')
var o1 = document.getElementById('piedra');
var o2 = document.getElementById('papel');
var o3 = document.getElementById('tijera');
let selected = null

opciones.forEach(opcion => {
    function select() {
        if(opcion.id = 'piedra') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '8px'
                o2.style.borderWidth = '1px'
                o3.style.borderWidth = '1px'
                selected = opcion.id
            }
        }
        else if(opcion.id = 'piedra') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '1px'
                o2.style.borderWidth = '8px'
                o3.style.borderWidth = '1px'
                selected = opcion.id
            }
        }
        else if(opcion.id = 'piedra') {
            if(opcion.style.borderWidth != '8px'){
                o1.style.borderWidth = '1px'
                o2.style.borderWidth = '8px'
                o3.style.borderWidth = '1px'
                selected = opcion.id
            }
        }
    }
    opcion.addEventListener('click', select)
})


function runChoices(){
    var computerChoice = Math.floor(Math.random()*3);
}