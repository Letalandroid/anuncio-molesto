$(document).ready(function () {
    
    document.getElementById("exit").addEventListener("click", salir, false);

});

function salir() {
    
    $(".anuncio-container").remove();
    console.log("El usuario acaba de cerrar la pestaña.");

}