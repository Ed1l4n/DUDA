var usuario;
let params = new URLSearchParams(document.location.search);
usuario = params.get("usuario");



function loaduser() {
    document.getElementById("user-name").innerHTML = usuario;
    var imagen_perfil = document.getElementById("foto_usuario");
    if(usuario == "CHARAURANS") {
        imagen_perfil.src = "../img/skins/cara_laura.png"
    } else if(usuario == "EDILAN") {
        imagen_perfil.src="../img/skins/cara_edilan.png";
    } else if(usuario == "DVDVD46") {
        imagen_perfil.src = "../img/skins/cara_jaimiro.png"
    } else if(usuario == "LECHUGUIN") {
        imagen_perfil.src = "../img/skins/cara_fran.png"
    } else if(usuario == "ALE_MRO") {
        imagen_perfil.src = "../img/skins/cara_alejandro.png"
    } else if(usuario == "AADRI_15") {
        imagen_perfil.src = "../img/skins/cara_adrian.png"
    }
}

function abrirweb(x) {
    var button_audio = new Audio('sounds/minecraft_click.mp3');
    button_audio.play();
    var delayMilis = 100;
    var username = x.value;
    var compareuser = username.toUpperCase();
    if(compareuser == "HEROBRINE") {
        window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0")
    } else if(compareuser == "CHARAURANS") {
        setTimeout(function() {
            window.location.replace("web/menu.htm?usuario=" + compareuser);
        }, delayMilis);
    } else if(compareuser == "EDILAN") {
        setTimeout(function() {
            window.location.replace("web/menu.htm?usuario=" + compareuser);
        }, delayMilis);
    } else if(compareuser == "LECHUGUIN") {
        setTimeout(function() {
            window.location.replace("web/menu.htm?usuario=" + compareuser);
        }, delayMilis);
    } else if(compareuser == "DVDVD46") {
        setTimeout(function() {
            window.location.replace("web/menu.htm?usuario=" + compareuser);
            
        }, delayMilis);
    } else if(compareuser == "ALE_MRO") {
        setTimeout(function() {
            window.location.replace("web/menu.htm?usuario=" + compareuser);
        }, delayMilis);
    } else if(compareuser == "AADRI_15") {
        setTimeout(function() {
            window.location.replace("web/menu.htm?usuario=" + compareuser);
        }, delayMilis);
    } else {
        setTimeout(function() {
            document.getElementById("alertamsg").style.animation = "alertafade 1s linear";
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
        window.open("dudaweb.htm?menu=mods&usuario="+usuario);
    } else if(x.id == "pag-eventos") {
        window.open("dudaweb.htm?menu=eventos&usuario="+usuario);
    } else if(x.id == "pag-normas") {
        window.open("dudaweb.htm?menu=normas&usuario="+usuario);
    }
}

