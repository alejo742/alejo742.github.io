function toggleDisplay(element, value) {
    if(element.style.display == 'none') {
        element.style.display == value
    }
    else {
        element.style.display = 'none'
    }
}
function setAnimation(element, animationName, duration) {
    element.style.animation = animationName +' '+ duration
}