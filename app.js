import * as myFunctions from "./functions/functions.js";    

// Esto manda a llamar al botón 1 y Onclick ayuda a ejecutar la función "botónPresionado1" cuando das click.
document.getElementById ('boton1').onclick = function () {botonPresionado1()}

//Aquí vamos a definir qué hace la función botónPresionado1
function botonPresionado1() {

    //Esto va a mandar a llamar mi div "card1", la cual está vacía, y el innerHTML me va a imprimir dentro de ese div vacío el código html que especifique
    document.getElementById ('card1').innerHTML = 

    //Este es mi código HTML de las cards
    "<div id='card-node'><div id='card-node-image'><img src='images/Tristana.png' alt='Tristana'></div><div id='card-node-content' class='card-content1'>" + myFunctions.divTexto1 + "</div></div>";

}

//Lo mismo del botón 1 se ejecuta aquí, pero mandando llamar al botón 2, y ejecutas la función "botonPresionado2"
document.getElementById ('boton2').onclick = function () {botonPresionado2()}

function botonPresionado2 () {

    document.getElementById ('card2').innerHTML = 
    
    "<div id='card-node'><div id='card-node-image'><img src='images/Poppy.jpg' alt='Poppy'></div><div id='card-node-content' class='card-content2'>" + myFunctions.divTexto2 + "</div></div>";
};