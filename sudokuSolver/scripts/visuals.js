//* Funcionalidad de loading
const loadingScreen = document.getElementsByClassName('loading')[0]; loadingScreen.style.animation = 'none'
const mainPage = document.querySelector('main');

setTimeout(() => {
    loadingScreen.style.animation = 'fadeOut 0.5s'
    setTimeout(() => {
        loadingScreen.style.display = 'none'
        mainPage.style.display = 'grid'
    }, 500)
}, 500)


//*Menú de navegación
const resolutor = document.getElementById('resolutor');
const generador = document.getElementById('generador');
const ajustes = document.getElementById('ajustes')
const navButtons = document.querySelectorAll('.nav-button')
const secciones = document.querySelectorAll('.content-section')

//Visual
navButtons.forEach(navButton =>{
    function toggleSelected() {
        navButtons.forEach(button => button.classList.remove('selected'))
        navButton.classList.add('selected')
    }

    navButton.addEventListener('click', toggleSelected)
})

//Funcional
navButtons.forEach(navButton => {
    function changeScreenOnClick() {
        var desiredChange = navButton.children[1].innerHTML.toLowerCase()
        for(let i = 0; i < secciones.length; i++) {
            if(desiredChange == secciones[i].id){
                secciones.forEach(seccion => seccion.classList.remove('displaying'))
                secciones[i].classList.add('displaying')
            }
        }
    }

    navButton.addEventListener('click', changeScreenOnClick)
})

//Para menú en media query 
const menuNavegacion = document.getElementById('navigation');
const menuButton = document.getElementById('menu-button');

function toggleMenu() {
    if(menuNavegacion.classList.contains('displaying')) {
        menuNavegacion.classList.remove('displaying')
    }
    else {
        menuNavegacion.classList.add('displaying')
    }
}
menuButton.addEventListener('click', toggleMenu)
