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
            if(compareuser != "") {
                window.location.replace("web/menu.htm");
            } else {
                document.getElementById("alertamsg").style.animation = "alertafade 1s linear";
            }
        }, delayMilis);
        document.getElementById("alertamsg").style = "animation:none;"
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
        window.open("dudaweb.htm?menu=mods");
    } else if(x.id == "pag-eventos") {
        window.open("dudaweb.htm?menu=eventos");
    } else if(x.id == "pag-normas") {
        window.open("dudaweb.htm?menu=normas");
    }
}