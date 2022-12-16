var main = document.getElementById("main")
var header = document.querySelector('header')

function showMain(){
    header.children[2].style.visibility = 'hidden'
    main.style.display = "flex"
    nextBsAndIds()
}

var nextBs = document.getElementsByClassName("next-button")
var questions = document.getElementsByClassName("question")

function nextBsAndIds() {
    for(var i = 0; i < questions.length; ++i) {
        var idNumber = i+1
        questions[i].id = "question" + idNumber
    }
    for(var i = 0; i < nextBs.length-1; ++i) {
        var hrefNumber = i+2
        nextBs[i].href = "#question" + hrefNumber
    }
}

const options = document.querySelectorAll('.option');

var sexting = 12
var fraude = 27
var carding = 20
var phishing = 22
var hackeo = 25
var ciberacoso = 21

var sextingIn = 12
var fraudeIn = 27
var cardingIn = 20
var phishingIn = 22
var hackeoIn = 25
var ciberacosoIn = 21

var sextingOptions = document.querySelectorAll(".sexting");
var fraudeOptions = document.querySelectorAll(".fraude");
var cardingOptions = document.querySelectorAll(".carding");
var phishingOptions = document.querySelectorAll(".phishing");
var hackeoOptions = document.querySelectorAll(".hackeo");
var ciberacosoOptions = document.querySelectorAll(".ciberacoso");

options.forEach(option => {
    function changeBorder() {
        options.forEach(opcion =>{
            if(opcion.href == option.href){
                opcion.style.borderWidth = "0.1vh"
            }
        })
        if(option.style.borderWidth != "1.5vh"){
            option.style.borderWidth = "1.5vh"
        }
        else {
            option.style.borderWidth = "0.1vh"
        }
    }

    option.addEventListener("click", changeBorder)
});

let sextingSumado = 0
let sextingClicked = false
sextingOptions.forEach(sextingOption =>{
    function sextingCount() {
        sextingClicked = true
        if(true) {
            if(sextingOption.innerHTML == "<span>Nunca</span>") {
                sexting -= sextingSumado
                sextingSumado = 0
            }
            else if(sextingOption.innerHTML == "<span>Pocas veces</span>") {
                sexting += Math.floor(sexting/sextingOptions.length*5)
                sexting -= sextingSumado
                sextingSumado = Math.floor(sexting/sextingOptions.length*3)
            }
            else if(sextingOption.innerHTML == "<span>Constantemente</span>") {
                sexting += Math.floor(sexting/sextingOptions.length*6)
                sexting -= sextingSumado
                sextingSumado = Math.floor(sexting/sextingOptions.length*5)
            }
            else if(sextingOption.innerHTML == "<span>Siempre</span>") {
                sexting += Math.floor(sexting/sextingOptions.length*8)
                sexting -= sextingSumado
                sextingSumado = Math.floor(sexting/sextingOptions.length*8)
            }
        }
    }
    sextingOption.addEventListener("click", sextingCount)
})

let fraudeSumado = 0
let fraudeClicked = false
fraudeOptions.forEach(fraudeOption =>{
    function fraudeCount() {
        fraudeClicked = true
        if(true) {
            if(fraudeOption.innerHTML == "<span>Nunca</span>") {
                fraude -= fraudeSumado
                fraudeSumado = 0
            }
            else if(fraudeOption.innerHTML == "<span>Pocas veces</span>") {
                fraude += Math.floor(fraude/fraudeOptions.length*3)
                fraude -= fraudeSumado
                fraudeSumado = Math.floor(fraude/fraudeOptions.length*3)
            }
            else if(fraudeOption.innerHTML == "<span>Constantemente</span>") {
                fraude += Math.floor(fraude/fraudeOptions.length*5)
                fraude -= fraudeSumado
                fraudeSumado = Math.floor(fraude/fraudeOptions.length*5)
            }
            else if(fraudeOption.innerHTML == "<span>Siempre</span>") {
                fraude += Math.floor(fraude/fraudeOptions.length*8)
                fraude -= fraudeSumado
                fraudeSumado = Math.floor(fraude/fraudeOptions.length*8)
            }
        }
    }
    fraudeOption.addEventListener("click", fraudeCount)
})

let cardingSumado = 0
let cardingClicked = false
cardingOptions.forEach(cardingOption =>{
    function cardingCount() {
        cardingClicked = true
        if(true) {
            if(cardingOption.innerHTML == "<span>Nunca</span>") {
                carding -= cardingSumado
                cardingSumado = 0
            }
            else if(cardingOption.innerHTML == "<span>Pocas veces</span>") {
                carding += Math.floor(carding/cardingOptions.length*3)
                carding -= cardingSumado
                cardingSumado = carding += Math.floor(carding/cardingOptions.length*3)
            }
            else if(cardingOption.innerHTML == "<span>Constantemente</span>") {
                carding += Math.floor(carding/cardingOptions.length*5)
                carding -= cardingSumado
                cardingSumado = carding += Math.floor(carding/cardingOptions.length*5)
            }
            else if(cardingOption.innerHTML == "<span>Siempre</span>") {
                carding += Math.floor(carding/cardingOptions.length*8)
                carding -= cardingSumado
                cardingSumado = carding += Math.floor(carding/cardingOptions.length*8)
            }
        }
    }
    cardingOption.addEventListener("click", cardingCount)
})

let phishingSumado = 0
let phishingClicked = false
phishingOptions.forEach(phishingOption =>{
    function phishingCount() {
        phishingClicked = true
        if(true) {
            if(phishingOption.innerHTML == "<span>Nunca</span>") {
                phishing -= phishingSumado
                phishingSumado = 0
            }
            else if(phishingOption.innerHTML == "<span>Pocas veces</span>") {
                phishing += Math.floor(phishing/phishingOptions.length*3)
                phishing -= phishingSumado
                phishingSumado = Math.floor(phishing/phishingOptions.length*3)
            }
            else if(phishingOption.innerHTML == "<span>Constantemente</span>") {
                phishing += Math.floor(phishing/phishingOptions.length*5)
                phishing -= phishingSumado
                phishingSumado = Math.floor(phishing/phishingOptions.length*5)
            }
            else if(phishingOption.innerHTML == "<span>Siempre</span>") {
                phishing += Math.floor(phishing/phishingOptions.length*8)
                phishing -= phishingSumado
                phishingSumado = Math.floor(phishing/phishingOptions.length*8)
            }
        }
    }
    phishingOption.addEventListener("click", phishingCount)
})

let hackeoSumado = 0
let hackeoClicked = false
hackeoOptions.forEach(hackeoOption =>{
    hackeoClicked = true
    function hackeoCount() {
        if(true) {
            if(hackeoOption.innerHTML == "<span>Nunca</span>") {
                hackeo -= hackeoSumado
                hackeoSumado = 0
            }
            else if(hackeoOption.innerHTML == "<span>Pocas veces</span>") {
                hackeo += Math.floor(hackeo/hackeoOptions.length*3)
                hackeo -= hackeoSumado
                hackeoSumado = Math.floor(hackeo/hackeoOptions.length*3)
            }
            else if(hackeoOption.innerHTML == "<span>Constantemente</span>") {
                hackeo += Math.floor(hackeo/hackeoOptions.length*5)
                hackeo -= hackeoSumado
                hackeoSumado = Math.floor(hackeo/hackeoOptions.length*5)
            }
            else if(hackeoOption.innerHTML == "<span>Siempre</span>") {
                hackeo += Math.floor(hackeo/hackeoOptions.length*8)
                hackeo -= hackeoSumado
                hackeoSumado = Math.floor(hackeo/hackeoOptions.length*8)
            }
        }
    }
    hackeoOption.addEventListener("click", hackeoCount)
})

let ciberacosoSumado = 0
let ciberacosoClicked = false
ciberacosoOptions.forEach(ciberacosoOption =>{
    function ciberacosoCount() {
        ciberacosoClicked = true
        if(true) {
            if(ciberacosoOption.innerHTML == "<span>Nunca</span>") {
                ciberacoso -= ciberacosoSumado
                ciberacosoSumado = 0
            }
            else if(ciberacosoOption.innerHTML == "<span>Pocas veces</span>") {
                ciberacoso += Math.floor(ciberacoso/ciberacosoOptions.length*3)
                ciberacoso -= ciberacosoSumado
                ciberacosoSumado = Math.floor(ciberacoso/ciberacosoOptions.length*3)
            }
            else if(ciberacosoOption.innerHTML == "<span>Constantemente</span>") {
                ciberacoso += Math.floor(ciberacoso/ciberacosoOptions.length*5)
                ciberacoso -= ciberacosoSumado
                ciberacosoSumado = Math.floor(ciberacoso/ciberacosoOptions.length*5)
            }
            else if(ciberacosoOption.innerHTML == "<span>Siempre</span>") {
                ciberacoso += Math.floor(ciberacoso/ciberacosoOptions.length*8)
                ciberacoso -= ciberacosoSumado
                ciberacosoSumado = Math.floor(ciberacoso/ciberacosoOptions.length*8)

            }
        }
    }
    ciberacosoOption.addEventListener("click", ciberacosoCount)
})

function showResults() {
    if(sextingClicked == false || fraudeClicked == false || cardingClicked == false || phishingClicked == false || hackeoClicked == false || ciberacosoClicked == false){
        alert('Has dejado alguna pregunta sin marcar. ¡Inténtalo de nuevo!')
    }
    else{
        document.getElementById("resultados").style.display = 'flex'
        document.getElementById('result-button').style.visibility = 'hidden'

        //Resultados sexting
        var sBar = document.getElementById("sexting-bar");
        var sPer = document.getElementById("sexting-per");
        sBar.style.width = sexting + sextingIn + "%"
        sPer.innerHTML = sexting+ sextingIn + "%"

        //Resultados fraude
        var fBar = document.getElementById("fraude-bar");
        var fPer = document.getElementById("fraude-per");
        fBar.style.width = fraude + fraudeIn + "%"
        fPer.innerHTML = fraude + fraudeIn + "%"

        //Resultados carding
        var cBar = document.getElementById("carding-bar");
        var cPer = document.getElementById("carding-per");
        cBar.style.width = carding + cardingIn + "%"
        cPer.innerHTML = carding + cardingIn + "%"

        //Resultados phishing
        var pBar = document.getElementById("phishing-bar");
        var pPer = document.getElementById("phishing-per");
        pBar.style.width = phishing + cardingIn + "%"
        pPer.innerHTML = phishing + cardingIn + "%"

        //Resultados hackeo
        var hBar = document.getElementById("hackeo-bar");
        var hPer = document.getElementById("hackeo-per");
        hBar.style.width = hackeo + hackeoIn + "%"
        hPer.innerHTML = hackeo + hackeoIn + "%"

        //Resultados ciberacoso
        var ciBar = document.getElementById("ciberacoso-bar");
        var ciPer = document.getElementById("ciberacoso-per");
        ciBar.style.width = ciberacoso + ciberacosoIn + "%"
        ciPer.innerHTML = ciberacoso + ciberacosoIn + "%"
    }
}

const resultados = document.querySelectorAll('.result')
resultados.forEach(resultado =>{
    function showRecommendations() {
        if(resultado.children[3].style.display != 'flex'){
            resultado.style.animation = 'rotate3D 1.5s'
            Array.from(resultado.children).forEach(hijo =>{
                hijo.style.animation = 'fadeOut 1.5s'
            })
            setTimeout(()=>{
                Array.from(resultado.children).forEach(hijo =>{
                    hijo.style.display = 'none'
                    resultado.children[3].style.display = 'flex'
                    resultado.style.animation = 'none'
                    hijo.style.animation = 'none'
                })
            }, 1500)
        }
        else {
            resultado.style.animation = 'rotate3D 1.5s'
            Array.from(resultado.children).forEach(hijo =>{
                hijo.style.animation = 'fadeOut 1.5s'
            })
            setTimeout(()=>{
                Array.from(resultado.children).forEach(hijo =>{
                    hijo.style.display = 'flex'
                    resultado.children[3].style.display = 'none'
                    resultado.style.animation = 'none'
                    hijo.style.animation = 'none'
                })
            }, 1500)
        }
    }

    resultado.addEventListener('click', showRecommendations)
})

const recomendaciones = [
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'], 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'], 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'], 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'], 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'], 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']]

function selectRandomElements(array){
    var arrayRetorno = []
    for(let i = 0; i < 3; i++){
        var numRandom = Math.floor(Math.random()*array.length)
        arrayRetorno.push(array[numRandom])
    }
    return arrayRetorno
}

var sextingRecommendations = document.getElementById('sexting-recom')
var fraudeRecommendations = document.getElementById('fraude-recom')
var cardingRecommendations = document.getElementById('carding-recom')
var phishingRecommendations = document.getElementById('phishing-recom')
var hackeoRecommendations = document.getElementById('hackeo-recom')
var ciberacosoRecommendations = document.getElementById('ciberacoso-recom')

for(let j = 0; j < 3; j++){
    var arrayRecomendaciones = selectRandomElements(recomendaciones[0])
    sextingRecommendations.children[j].innerHTML = arrayRecomendaciones[j]
}
for(let j = 0; j < 3; j++){
    var arrayRecomendaciones = selectRandomElements(recomendaciones[1])
    fraudeRecommendations.children[j].innerHTML = arrayRecomendaciones[j]
}
for(let j = 0; j < 3; j++){
    var arrayRecomendaciones = selectRandomElements(recomendaciones[2])
    cardingRecommendations.children[j].innerHTML = arrayRecomendaciones[j]
}
for(let j = 0; j < 3; j++){
    var arrayRecomendaciones = selectRandomElements(recomendaciones[3])
    phishingRecommendations.children[j].innerHTML = arrayRecomendaciones[j]
}
for(let j = 0; j < 3; j++){
    var arrayRecomendaciones = selectRandomElements(recomendaciones[4])
    hackeoRecommendations.children[j].innerHTML = arrayRecomendaciones[j]
}
for(let j = 0; j < 3; j++){
    var arrayRecomendaciones = selectRandomElements(recomendaciones[5])
    ciberacosoRecommendations.children[j].innerHTML = arrayRecomendaciones[j]
}
