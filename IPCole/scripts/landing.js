setTimeout(()=>{
    const allDOM = Array.from(document.querySelectorAll('*'))
    allDOM.forEach(element =>{
        if(element.className != 'little-image'){
            setAnimation(element, 'none')
            console.log('animation gone')
        }
    })
}, 1700)

function setDisplay(element, value) {
    element.style.display = value
}
function setAnimation(element, animacion){
    element.style.animation = animacion
}

const secciones = document.querySelectorAll('.main-section');
const sec1 = secciones[0]
const sec2 = secciones[1]
const sec3 = secciones[2]
const sec4 = secciones[3]
const arrows = document.querySelectorAll('.arrow-button')

function swapView(toHide, toView, clicked, displayType) {
    if(clicked=='left-arrow'){
        setAnimation(toHide, 'swipeRight 0.8s')
        setAnimation(toView, 'moveInRight 0.8s')
        setTimeout(()=>{
            setDisplay(toHide, 'none')
            setDisplay(toView, displayType)
        }, 800)
    }
    else if(clicked=='right-arrow'){
        setAnimation(toHide, 'swipeLeft 0.8s')
        setAnimation(toView, 'moveInLeft 0.8s')
        setTimeout(()=>{
            setDisplay(toHide, 'none')
            setDisplay(toView, displayType)
        }, 800)
    }
}

var currentSection = 1
const navCircles = document.querySelectorAll('.navigation-circle')

function changeNavCircleColor(section){
    navCircles.forEach(navCircle=>{
        navCircle.style.backgroundColor = 'transparent'
    })
    navCircles[section-1].style.backgroundColor = 'rgb(44, 44, 150)'
}
changeNavCircleColor(1)

arrows.forEach(arrow =>{
    function changeView() {
        if(arrow.id=='left-arrow'){
            if(currentSection==1){
                swapView(sec1, sec4, arrow.id, 'grid')
                currentSection = 4
                changeNavCircleColor(currentSection)
            }
            else if(currentSection==2){
                swapView(sec2, sec1, arrow.id, 'grid')
                currentSection = 1
                changeNavCircleColor(currentSection)
            }
            else if(currentSection==3){
                swapView(sec3, sec2, arrow.id, 'grid')
                currentSection = 2
                changeNavCircleColor(currentSection)
            }
            else if(currentSection==4){
                swapView(sec4, sec3, arrow.id, 'flex')
                currentSection = 3
                changeNavCircleColor(currentSection)
            }
        }
        else if(arrow.id=='right-arrow'){
            if(currentSection==1){
                swapView(sec1, sec2, arrow.id, 'grid')
                currentSection = 2
                changeNavCircleColor(currentSection)
            }
            else if(currentSection==2){
                swapView(sec2, sec3, arrow.id, 'flex')
                currentSection = 3
                changeNavCircleColor(currentSection)
            }
            else if(currentSection==3){
                swapView(sec3, sec4, arrow.id, 'grid')
                currentSection = 4
                changeNavCircleColor(currentSection)
            }
            else if(currentSection==4){
                swapView(sec4, sec1, arrow.id, 'grid')
                currentSection = 1
                changeNavCircleColor(currentSection)
            }
        }
    }
    arrow.addEventListener('click', changeView)
})