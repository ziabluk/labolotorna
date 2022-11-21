
let link_a = document.getElementsByTagName("a");
for(let i = 0; i < link_a.length; i++){
    link_a[i].addEventListener('mouseover', aiming);
    link_a[i].addEventListener('mouseout', remove);
}
function aiming(){    
    let element = document.createElement("span");
    let inner = this.href;
    element.innerHTML = inner;
    element.id = 'jelem';
    this.insertAdjacentElement('beforeend', element);
}
function remove(){
    document.getElementById('jelem').remove();
}