
let count = 0;
let countclick = document.getElementById("count")
function Click(){ //При нажатии прибовляет к count 1 и резельтат присвается обзацу <p>
    count += 1;
    countclick.innerHTML = count
}