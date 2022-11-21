let form = document.getElementById("form");
let count = 0;

function sum(){  //функция пробегает по form и прибовляет значение value к count 
    for (let i = 0; i < form.children.length; i++){
        count += Number(form.children[i].value);
    }
    alert(count)
}