function showSteps() {
    document.querySelector('header').style.display = 'none'
    document.querySelector('main').style.display ='flex'
}
function showFinalMessage() {
    document.querySelector('main').style.display ='none'
    document.querySelector('section').style.display ='flex'
}

let uploadCounter = 0
let alreadyUploaded = false
const fileContainer = document.querySelectorAll('.file-container')[0]
function promptUpload() {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = (e) => {
        var file = e.target.files[0];
        let fileName = file.name;
        let fileSize = file.size;

        //* Para añadir elemento con nombre y peso del archivo
        if (uploadCounter != 0 || alreadyUploaded===true){
            var newSpan = document.createElement('span');
            newSpan.innerHTML = `${fileName} - ${fileSize/1000}kB <strong onclick="eraseFile()">X</strong>`;
            newSpan.className = 'uploads'
            newSpan.id =`file-${uploadCounter}`
            fileContainer.appendChild(newSpan);

            uploadCounter++
        }
        else{
            var newSpan = document.createElement('span');
            newSpan.innerHTML = `${fileName} - ${fileSize/1000}kB <strong onclick="eraseFile()">X</strong>`;
            newSpan.className = 'uploads'
            newSpan.id =`file-${uploadCounter}`
            fileContainer.removeChild(document.getElementById('span-ejemplo'));
            fileContainer.appendChild(newSpan);
            
            uploadCounter++
            alreadyUploaded = true
        }
    }

    input.click();
}


//* Al apretar la X del archivo
function eraseFile() {
    fileContainer.removeChild(document.getElementById("file-"+(uploadCounter-1)))
    uploadCounter--
}


//! Verificación de rellenado completo del formulario:

function checkCompletion() {
    if(true) {
        
    }
    else {
        showFinalMessage()
    }
}