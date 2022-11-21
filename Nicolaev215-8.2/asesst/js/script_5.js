let ol = document.getElementById("ol");
// Создает элемент li и добавляет его в ol
function add(){
    // На этом моменте создает
    let elem = document.createElement("LI")
    elem.innerHTML = "Пункт"
    //На этом добавляет
    ol.appendChild(elem)
}