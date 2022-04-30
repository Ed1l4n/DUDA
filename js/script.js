function abrirweb() {
    var button_audio = new Audio('sounds/minecraft_click.mp3');
    button_audio.play();
    var delayMilis = 100;
        setTimeout(function() {
            window.location.replace("web/dudaweb.htm");
        }, delayMilis);
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