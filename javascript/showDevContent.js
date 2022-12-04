function showDevFormation(){

    var Formation=document.getElementById("formation");
    var Projects=document.getElementById("projects");
    var Habilities=document.getElementById("habilities");

    if(Formation.style.display == "inline-block"){
        //-----//
    } else {
        Formation.style.display = "inline-block";
        Projects.style.display = "none";
        Habilities.style.display = "none";
    }
}

function showDevProjects(){
    var Projects=document.getElementById("projects");
    var Formation=document.getElementById("formation");
    var Habilities=document.getElementById("habilities");

    if(Projects.style.display == "inline-block"){
        //-----//
    } else {
        Projects.style.display = "inline-block";
        Formation.style.display = "none";
        Habilities.style.display = "none";
    }
}

function showDevHabilities(){
    var Habilities=document.getElementById("habilities");
    var Projects=document.getElementById("projects");
    var Formation=document.getElementById("formation");

    if(Habilities.style.display == "inline-block"){
        //-----//
    } else {
        Habilities.style.display = "inline-block";
        Formation.style.display = "none";
        Projects.style.display = "none";
    }
}