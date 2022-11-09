const navButtons = document.querySelectorAll('.button')

navButtons.forEach(button =>{
    function mouseOver(){
        button.style.transform ='translateY(-15px)'
        button.children[1].style.color='var(--colorSecundario)'

        if(button.children[1].innerHTML.toLowerCase() == 'habilidades') {
            button.children[0].src='./res/home/seconIcons/habilidades.svg'
        }
        else if(button.children[1].innerHTML.toLowerCase() == 'proyectos') {
            button.children[0].src='./res/home/seconIcons/proyectos.svg'
        }
        else if(button.children[1].innerHTML.toLowerCase() == 'reconocimientos') {
            button.children[0].src='./res/home/seconIcons/reconocimientos.svg'
        }
        else if(button.children[1].innerHTML.toLowerCase() == 'sobre mí') {
            button.children[0].src='./res/home/seconIcons/persona.svg'
        }
    }

    function mouseOut() {
        button.style.transform =''
        button.children[1].style.color='var(--colorEnPrimario)'
        
        if(button.children[1].innerHTML.toLowerCase() == 'habilidades') {
            button.children[0].src='./res/home/primIcons/habilidades.svg'
        }
        else if(button.children[1].innerHTML.toLowerCase() == 'proyectos') {
            button.children[0].src='./res/home/primIcons/proyectos.svg'
        }
        else if(button.children[1].innerHTML.toLowerCase() == 'reconocimientos') {
            button.children[0].src='./res/home/primIcons/reconocimientos.svg'
        }
        else if(button.children[1].innerHTML.toLowerCase() == 'sobre mí') {
            button.children[0].src='./res/home/primIcons/persona.svg'
        }
    }

    button.addEventListener('mouseover', mouseOver)
    button.addEventListener('mouseout', mouseOut)
})

