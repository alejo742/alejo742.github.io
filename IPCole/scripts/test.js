var main = document.getElementById("main")

function showMain(){
    if(main.style.display == "none") {
        main.style.display = "flex"
        nextBsAndIds()
        clickOptions()
    }
    else {
        main.style.display = "flex"
        nextBsAndIds()
        clickOptions()
    }
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

var sexting = 10
var fraude = 27
var carding = 16
var phishing = 19
var hackeo = 25
var ciberacoso = 21

var sextingOptions = document.querySelectorAll(".sexting");
var fraudeOptions = document.getElementsByClassName("fraude");
var cardingOptions = document.getElementsByClassName("carding");
var phishingOptions = document.getElementsByClassName("phishing");
var hackeoOptions = document.getElementsByClassName("hackeo");
var ciberacosoOptions = document.getElementsByClassName("ciberacoso");

options.forEach(option => {
    function changeBorder() {
        if(option.style.borderWidth != "8px"){
            option.style.borderWidth = "8px"
        }
        else {
            option.style.borderWidth = "1px"
        }
    }

    option.addEventListener("click", changeBorder)
});

sextingOptions.forEach(sextingOption =>{
    function sextingCount() {
        if(true) {
            if(sextingOption.innerHTML == "<span>Nunca</span>") {
                
            }
            else if(sextingOption.innerHTML == "<span>Pocas veces</span>") {
                sexting += Math.floor(sexting/sextingOptions.length*3)
 
            }
            else if(sextingOption.innerHTML == "<span>Constantemente</span>") {
                sexting += Math.floor(sexting/sextingOptions.length*5)

            }
            else if(sextingOption.innerHTML == "<span>Siempre</span>") {
                sexting += Math.floor(sexting/sextingOptions.length*8)

            }
        }
    }
    sextingOption.addEventListener("click", sextingCount)
})

fraudeOptions.forEach(fraudeOption =>{
    function fraudeCount() {
        if(true) {
            if(fraudeOption.innerHTML == "<span>Nunca</span>") {
                
            }
            else if(fraudeOption.innerHTML == "<span>Pocas veces</span>") {
                fraude += Math.floor(fraude/fraudeOptions.length*3)
 
            }
            else if(fraudeOption.innerHTML == "<span>Constantemente</span>") {
                fraude += Math.floor(fraude/fraudeOptions.length*5)

            }
            else if(fraudeOption.innerHTML == "<span>Siempre</span>") {
                fraude += Math.floor(fraude/fraudeOptions.length*8)

            }
        }
    }
    fraudeOption.addEventListener("click", fraudeCount)
})

cardingOptions.forEach(cardingOption =>{
    function cardingCount() {
        if(true) {
            if(cardingOption.innerHTML == "<span>Nunca</span>") {
                
            }
            else if(cardingOption.innerHTML == "<span>Pocas veces</span>") {
                carding += Math.floor(carding/cardingOptions.length*3)
 
            }
            else if(cardingOption.innerHTML == "<span>Constantemente</span>") {
                carding += Math.floor(carding/cardingOptions.length*5)

            }
            else if(cardingOption.innerHTML == "<span>Siempre</span>") {
                carding += Math.floor(carding/cardingOptions.length*8)

            }
        }
    }
    cardingOption.addEventListener("click", cardingCount)
})

phishingOptions.forEach(phishingOption =>{
    function phishingCount() {
        if(true) {
            if(phishingOption.innerHTML == "<span>Nunca</span>") {
                
            }
            else if(phishingOption.innerHTML == "<span>Pocas veces</span>") {
                phishing += Math.floor(phishing/phishingOptions.length*3)
 
            }
            else if(phishingOption.innerHTML == "<span>Constantemente</span>") {
                phishing += Math.floor(phishing/phishingOptions.length*5)

            }
            else if(phishingOption.innerHTML == "<span>Siempre</span>") {
                phishing += Math.floor(phishing/phishingOptions.length*8)

            }
        }
    }
    phishingOption.addEventListener("click", phishingCount)
})

hackeoOptions.forEach(hackeoOption =>{
    function hackeoCount() {
        if(true) {
            if(hackeoOption.innerHTML == "<span>Nunca</span>") {
                
            }
            else if(hackeoOption.innerHTML == "<span>Pocas veces</span>") {
                hackeo += Math.floor(hackeo/hackeoOptions.length*3)
 
            }
            else if(hackeoOption.innerHTML == "<span>Constantemente</span>") {
                hackeo += Math.floor(hackeo/hackeoOptions.length*5)

            }
            else if(hackeoOption.innerHTML == "<span>Siempre</span>") {
                hackeo += Math.floor(hackeo/hackeoOptions.length*8)

            }
        }
    }
    hackeoOption.addEventListener("click", hackeoCount)
})

ciberacosoOptions.forEach(ciberacosoOption =>{
    function ciberacosoCount() {
        if(true) {
            if(ciberacosoOption.innerHTML == "<span>Nunca</span>") {
                
            }
            else if(ciberacosoOption.innerHTML == "<span>Pocas veces</span>") {
                ciberacoso += Math.floor(ciberacoso/ciberacosoOptions.length*3)
 
            }
            else if(ciberacosoOption.innerHTML == "<span>Constantemente</span>") {
                ciberacoso += Math.floor(ciberacoso/ciberacosoOptions.length*5)

            }
            else if(ciberacosoOption.innerHTML == "<span>Siempre</span>") {
                ciberacoso += Math.floor(ciberacoso/ciberacosoOptions.length*8)

            }
        }
    }
    ciberacosoOption.addEventListener("click", ciberacosoCount)
})

function showR() {
    document.getElementById("resultados").style.display = 'flex'
    document.getElementById("recomendaciones").style.display = 'flex'

    //Resultados sexting
    var sBar = document.getElementById("sexting-bar");
    var sPer = document.getElementById("sexting-per");
    sBar.style.width = sexting + "%"
    sPer.innerHTML = sexting + "%"

    //Resultados fraude
    var fBar = document.getElementById("fraude-bar");
    var fPer = document.getElementById("fraude-per");
    fBar.style.width = fraude + "%"
    fPer.innerHTML = fraude + "%"

    //Resultados carding
    var cBar = document.getElementById("carding-bar");
    var cPer = document.getElementById("carding-per");
    cBar.style.width = carding + "%"
    cPer.innerHTML = carding + "%"

    //Resultados phishing
    var pBar = document.getElementById("phishing-bar");
    var pPer = document.getElementById("phishing-per");
    pBar.style.width = phishing + "%"
    pPer.innerHTML = phishing + "%"

    //Resultados hackeo
    var hBar = document.getElementById("hackeo-bar");
    var hPer = document.getElementById("hackeo-per");
    hBar.style.width = hackeo + "%"
    hPer.innerHTML = hackeo + "%"

    //Resultados ciberacoso
    var ciBar = document.getElementById("ciberacoso-bar");
    var ciPer = document.getElementById("ciberacoso-per");
    ciBar.style.width = ciberacoso + "%"
    ciPer.innerHTML = ciberacoso + "%"
}