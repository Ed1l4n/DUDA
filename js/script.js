function abrirweb(x) {
    var button_audio = new Audio('sounds/minecraft_click.mp3');
    button_audio.play();
    var delayMilis = 100;
    var username = x.value;
    var compareuser = username.toUpperCase();
    if(compareuser == "HEROBRINE") {
        window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0")
    } else {
        setTimeout(function() {
            window.location.replace("web/dudaweb.htm");
        }, delayMilis);
    }
    
}
function volverweb() {
    var button_audio = new Audio('../sounds/minecraft_click.mp3');
    button_audio.play();
    var delayMilis = 100;
        setTimeout(function() {
            window.location.replace("../index.htm");
        }, delayMilis);
}

function fotosintesis() {
    window.open("https://www.youtube.com/watch?v=xJxr1piIfSU");
}

function abrirPanel(x) {
    if(x.id == "pag-mods") {
        alternarPaneles();
    } else if(x.id == "pag-eventos") {
        alternarPaneles();
    } else if(x.id == "pag-normas") {
        alternarPaneles();
    }
}

function alternarPaneles() {
    document.getElementById("barra-lateral").style.display = "flex";
    document.getElementById("container-pags-selec-id").style.display = "none";
}