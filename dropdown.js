function dropdown1() {
    document.getElementById("dropdown-classicos").classList.toggle("show");
    dropdownTheme()
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
function dropdown2() {
    document.getElementById("dropdown-desportivos").classList.toggle("show");
    dropdownTheme()
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
function dropdown3() {
    document.getElementById("dropdown-super").classList.toggle("show");
    dropdownTheme()
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
function dropdown4() {
    document.getElementById("dropdown-camioes").classList.toggle("show");
    dropdownTheme()
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

function dropdownTheme(){
    if(document.getElementById("theme").innerHTML == 'Claro'){
        document.getElementById("dropdown-classicos").style.background = "rgba(0, 0, 0)";
        document.getElementById("classic-1").style.color = "#f1f1f1";
        document.getElementById("classic-2").style.color = "#f1f1f1";
        document.getElementById("classic-3").style.color = "#f1f1f1";
        document.getElementById("classic-4").style.color = "#f1f1f1";
        document.getElementById("classic-5").style.color = "#f1f1f1";

        document.getElementById("dropdown-desportivos").style.background = "rgba(0, 0, 0)";
        document.getElementById("sports-1").style.color = "#f1f1f1";
        document.getElementById("sports-2").style.color = "#f1f1f1";
        document.getElementById("sports-3").style.color = "#f1f1f1";
        document.getElementById("sports-4").style.color = "#f1f1f1";
        document.getElementById("sports-5").style.color = "#f1f1f1";

        document.getElementById("dropdown-super").style.background = "rgba(0, 0, 0)";
        document.getElementById("super-1").style.color = "#f1f1f1";
        document.getElementById("super-2").style.color = "#f1f1f1";
        document.getElementById("super-3").style.color = "#f1f1f1";
        document.getElementById("super-4").style.color = "#f1f1f1";
        document.getElementById("super-5").style.color = "#f1f1f1";

        document.getElementById("dropdown-camioes").style.background = "rgba(0, 0, 0)";
        document.getElementById("todoterreno-1").style.color = "#f1f1f1";
        document.getElementById("todoterreno-2").style.color = "#f1f1f1";
        document.getElementById("todoterreno-3").style.color = "#f1f1f1";
        document.getElementById("todoterreno-4").style.color = "#f1f1f1";
        document.getElementById("todoterreno-5").style.color = "#f1f1f1";
    }
    else{
        if(document.getElementById("theme").innerHTML == 'Escuro'){
            document.getElementById("dropdown-classicos").style.background = "#f1f1f1";
            document.getElementById("classic-1").style.color = "black";
            document.getElementById("classic-2").style.color = "black";
            document.getElementById("classic-3").style.color = "black";
            document.getElementById("classic-4").style.color = "black";
            document.getElementById("classic-5").style.color = "black";
    
            document.getElementById("dropdown-desportivos").style.background = "#f1f1f1";
            document.getElementById("sports-1").style.color = "black";
            document.getElementById("sports-2").style.color = "black";
            document.getElementById("sports-3").style.color = "black";
            document.getElementById("sports-4").style.color = "black";
            document.getElementById("sports-5").style.color = "black";
    
            document.getElementById("dropdown-super").style.background = "#f1f1f1";
            document.getElementById("super-1").style.color = "black";
            document.getElementById("super-2").style.color = "black";
            document.getElementById("super-3").style.color = "black";
            document.getElementById("super-4").style.color = "black";
            document.getElementById("super-5").style.color = "black";
    
            document.getElementById("dropdown-camioes").style.background = "#f1f1f1";
            document.getElementById("todoterreno-1").style.color = "black";
            document.getElementById("todoterreno-2").style.color = "black";
            document.getElementById("todoterreno-3").style.color = "black";
            document.getElementById("todoterreno-4").style.color = "black";
            document.getElementById("todoterreno-5").style.color = "black";
        }
    }
}