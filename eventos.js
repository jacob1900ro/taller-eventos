document.addEventListener('DOMContentLoaded', function () {

    function mensaje() {
        alert("Hola! Soy el div");
    }
    
    const container = document.querySelector("#container");
    container.addEventListener("click", mensaje);

});