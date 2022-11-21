let body = document.getElementById("body");
function countries(obj){
    if (obj.value == "rus"){
        let create = document.createElement('SELECT');
        body.appendChild(create);
        let create_city = document.createElement('OPTION');
        create_city.innerHTML = "Город1";
        create.appendChild(create_city);
        let create_city1 = document.createElement('OPTION');
        create_city1.innerHTML = "Город2";
        create.appendChild(create_city1);
        let create_city2 = document.createElement('OPTION');
        create_city2.innerHTML = "Город3";
        create.appendChild(create_city2);
    }
}

