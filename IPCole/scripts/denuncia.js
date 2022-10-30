var quiz1 = document.getElementById("quiz1")
var quiz2 = document.getElementById("quiz2")
var quiz3 = document.getElementById("quiz3")
var title1 = document.getElementById("click-title1")
var title2 = document.getElementById("click-title2")
var title3 = document.getElementById("click-title3")

function show1() {
    quiz1.style.display = "block"
    title1.style.display = "none"
}
function show2() {
    quiz2.style.display = "grid"
    title2.style.display = "none"
}
function show3() {
    quiz3.style.display = "grid"
    title3.style.display = "none"
}
