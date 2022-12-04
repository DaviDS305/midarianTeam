function showMore(){
    var more=document.getElementById("hiddenContent");
    var showButton=document.getElementById("showButton");

    if(more.style.display == "block"){
        more.style.display = "none";
        showButton.innerHTML = "Me fale mais sobre o Reciclóvis";
    } else {
        more.style.display = "block";
        showButton.innerHTML = "Ocultar";
    }
}

function combotsShowMore(){
    var more=document.getElementById("hiddenContent");
    var showButton=document.getElementById("showButton");

    if(more.style.display == "block"){
        more.style.display = "none";
        showButton.innerHTML = "Me fale mais sobre o Combots";
    } else {
        more.style.display = "block";
        showButton.innerHTML = "Ocultar";
    }
}