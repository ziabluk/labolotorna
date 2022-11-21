let height1 = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight)
function height(){
    if (height1 == window.innerHeight){
        alert("Прокрутки нет");
    } else {
        alert("Прокрутка есть");
    }
}