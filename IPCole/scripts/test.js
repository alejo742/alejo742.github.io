const main = document.getElementById("main");
const header = document.querySelector('header');
const divResultados = document.getElementById('resultados');


function showMain(){
    header.children[2].style.visibility = 'hidden'
    divResultados.style.display = 'none'
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
['Rechaza mensajes de tipo sexual o pornográfico.', 'Comunica sobre lo que ocurre.', 'Denuncia si observas que se comparten fotos íntimas.', 'Si crees ceder ante la presión, bloquea.', 'Evita hablar con extraños.', 'No accedas a chantajes.', 'No compartas información o fotografías comprometedoras.', 'No bromees con este tipo de imágenes o vídeos.', 'No envíes contenidos privados para atraer la atención de otra persona.', 'Infórmate sobre las modalidades de persuasión para cometer sexting.', 'Evalúa muy bien con quién compartes tus fotos o videos, ya sean de contenido sexual o en general.', 'Promueve una visión crítica de aquellos mandatos y presiones sociales sobre la sexualidad.', 'Muéstrate abierto a hablar del tema y solucionar vulnerabilidades.', 'Trabaja en tu autoestima siempre que puedas.', 'Averigua sobre interacciones y cultura de privacidad en línea.'], 
['Evita usar Wi-Fi públicas.', 'Procura ingresar sólo a páginas seguras.', 'Presta atención al indicador de seguridad 🔒 de tu navegador.', 'Protege tus dispositivos electrónicos con servicios de antivirus.', 'Aléjate de sitios web que muestren mensajes sospechosos.', 'Monitorea con frecuencia tus cuentas digitales en busca de cambios extraños.', 'Usa una VPN cuando tengas que navegar en redes públicas.', 'Trata de usar contraseñas variadas y difíciles de adivinar', 'No dejes rastros de tu información confidencial al cambiar tus dispositivos.', 'Realiza análisis de seguridad a tus dispositivos para buscar malware.', 'Ten cuidado con clones de páginas reales.', 'Sé precavido con los pagos en línea', 'Sé creativo/a con las contraseñas de tus cuentas.', 'Revisa tus medios de contacto con frecuencia en busca de actividad no usual.', 'Usa extensiones de navegación segura en tu navegador.'], 
['Recurre a tu sentido común para detectar páginas peligrosas.', 'No realices transacciones en línea si tienes dudas sobre la página', 'Verifica con regularidad tu estado de cuenta en busca de actividad.', 'Utiliza plataformas de pago intermedias con saldo reducido.', 'Establece doble comprobación para tus transacciones.', 'Siempre conserva justificantes de tus transacciones.', 'Instala un cortafuegos efectivo si manejas mucho dinero desde tus dispositivos.', 'Nunca proveas tus datos bancarios por teléfono (mensajes o llamadas).', 'Asegúrate que las páginas que visitas cuentan con el certificado HTTPS.', 'Activa, si puedes, las alertas de uso de tarjeta por correo.', 'Somete tus dispositivos a mantenimientos informáticos con expertos.', 'Tu tarjeta debería tener todas las medidas de seguridad disponibles.', 'Implementa funciones de detección de fraude en tus tarjetas.', 'Consulta a tu banco por información para protegerte.', 'Si crees ser víctima, comunica y denuncia inmediatamente.'], 
['Evita usar dispositivos de acceso público para tu actividad privada.', 'Ten cuidado con correos electrónicos fraudulentos', 'Revisa con frecuencia tus estados de cuenta o resúmenes bancarios.', 'Verifique la veracidad de los sitios web a los que accede antes de colocar información.', 'No confíes en todo lo que ves en redes sociales.', 'Infórmate sobre las políticas de privacidad de tus bancos.', 'No ingreses a enlaces de tu banco a través de correos electrónicos.', 'Mantén tus sistemas actualizados para evitar fallas de seguridad.', 'Las webs a las que ingreses han de empezar por "https://"', 'Si tienes dudas sobre la autenticidad de algo, desconfía.', 'Conoce la evolución de los distintos tipos de malware.', 'Ante cualquier comportamiento inusual, comunica.', 'Escucha testimonios de víctimas de phishing.', 'Ten en mente los dominios web de tus páginas habituales.', 'Aléjate de personas involucradas con este tipo de delitos.'], 
['Comunícate con alguien de confianza si eres víctima.', 'No tengas verguenza o miedo de denunciar.', 'No sucumbas ante amenazas vacías en línea.', 'Si te incomoda y/o daña, bloquea.', 'Conserva las pruebas del delito si llegas a ser víctima.', 'Sé diligente al publicar contenido en línea.', 'Configura tu privacidad en redes sociales a tu gusto.', 'Usa contraseñas creativas y seguras.', 'Si sabes de un caso, no calles, y denuncia.', 'Infórmate sobre los métodos de acoso digital actuales.', 'Alienta la conciencia social sobre el ciberacoso en tu círculo social.', 'No confundas la violencia con una broma pesada.', 'Selecciona con cuidado a tu lista de amigos/seguidores en redes.', 'No te dejes llevar por información falsa sobre ti.', 'Protege tus datos personales e información comprometedora.'], 
['Utiliza contraseñas seguras y distintas en tus cuentas.', 'Cambia tus contraseñas algunas veces al año.', 'Usa autenticaciones en 2 pasos para tus procesos digitales.', 'No te conectes a redes públicas si no es absolutamente necesario', 'Usa protocolos seguros en tus correos y programas.', 'Evita instalar software desconocido o pirateado.', 'No hagas click en enlaces de descarga de primera mano.', 'Navega con una VPN siempre que puedas', 'Usa un gestor de contraseñas para tus cuentas.', 'Implementa procesos de seguridad en tu teléfono, para verificaciones.', 'Realiza copias de seguridad de tu información relevante.', 'Da de baja a los servicios digitales que no uses.', 'Asegúrate de que los correos con los que interactúas sean auténticos.', 'Descarga software sólo de fuentes oficiales.', 'Lee opiniones y recomendaciones de expertos sobre el tema.']]

function selectRandomElements(array){
    var arrayRetorno = []
    while(arrayRetorno.length < 3) {
        const numeroRandom = () => {
            return Math.floor(Math.random()*array.length)
        }
        var numRandom = numeroRandom()

        while(arrayRetorno.includes(array[numRandom])){
            numRandom = numeroRandom()
        }
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
