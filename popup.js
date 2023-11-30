function popup(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.opacity = "1";
}

function close_popup(){
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup").style.opacity = "0";
}