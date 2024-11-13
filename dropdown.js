function dropdown1() { //ABRE O DROPDOWN DOS CARROS CLÁSSICOS
    document.getElementById("dropdown-classicos").classList.toggle("show");
    if(document.getElementById("dropdown-desportivos").classList.value.includes("show")){
        document.getElementById("dropdown-desportivos").classList.toggle("show");
    }
    if(document.getElementById("dropdown-super").classList.value.includes("show")){
        document.getElementById("dropdown-super").classList.toggle("show");
    }
    if(document.getElementById("dropdown-camioes").classList.value.includes("show")){
        document.getElementById("dropdown-camioes").classList.toggle("show");
    }
}
function dropdown2() { //ABRE O DROPDOWN DOS CARROS DESPORTIVOS
    document.getElementById("dropdown-desportivos").classList.toggle("show");
    if(document.getElementById("dropdown-classicos").classList.value.includes("show")){
        document.getElementById("dropdown-classicos").classList.toggle("show");
    }
    if(document.getElementById("dropdown-super").classList.value.includes("show")){
        document.getElementById("dropdown-super").classList.toggle("show");
    }
    if(document.getElementById("dropdown-camioes").classList.value.includes("show")){
        document.getElementById("dropdown-camioes").classList.toggle("show");
    }
}
function dropdown3() { //ABRE O DROPDOWN DOS CARROS SUPER
    document.getElementById("dropdown-super").classList.toggle("show");
    if(document.getElementById("dropdown-desportivos").classList.value.includes("show")){
        document.getElementById("dropdown-desportivos").classList.toggle("show");
    }
    if(document.getElementById("dropdown-classicos").classList.value.includes("show")){
        document.getElementById("dropdown-classicos").classList.toggle("show");
    }
    if(document.getElementById("dropdown-camioes").classList.value.includes("show")){
        document.getElementById("dropdown-camioes").classList.toggle("show");
    }
}
function dropdown4() { //ABRE O DROPDOWN DOS CARROS TODO TERRENO
    document.getElementById("dropdown-camioes").classList.toggle("show");
    if(document.getElementById("dropdown-desportivos").classList.value.includes("show")){
        document.getElementById("dropdown-desportivos").classList.toggle("show");
    }
    if(document.getElementById("dropdown-super").classList.value.includes("show")){
        document.getElementById("dropdown-super").classList.toggle("show");
    }
    if(document.getElementById("dropdown-classicos").classList.value.includes("show")){
        document.getElementById("dropdown-classicos").classList.toggle("show");
    }
}