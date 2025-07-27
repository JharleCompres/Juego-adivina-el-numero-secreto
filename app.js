let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; // este es el numero maximo que el usuario puede ingresar

// Esta función asigna un texto a un elemento HTML dado su selector
function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);// este obtiene el valor del input del usuario por medio de su id
   
   if (numeroUsuario === numeroSecreto) {
    asignarElementoTexto ("p", `Has acertado el numero secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled"); // este habilita el boton reiniciar al acertar el numero secreto
   } 
   else { // este verifica si el numero ingresado por el usuario es igual al numero secreto
    if (numeroUsuario > numeroSecreto) {
        asignarElementoTexto("p", "El numero secreto es menor");
    } else {
        asignarElementoTexto("p", "El numero secreto es mayor");
    } intentos++;
   } if (intentos > 3) {
       asignarElementoTexto("p", `Has alcanzado el maximo de intentos, el numero secreto era ${numeroSecreto}`);
       document.getElementById("reiniciar").removeAttribute("disabled"); // este habilita el boton reiniciar al acertar el numero secreto
   }
      
   limpiarCaja(); // este limpia el input del usuario
    return;
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = ""; // este limpia el input del usuario
}
function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;// este genera el numero aleatorio sin incluir la variable numero secreto
   
   if (listaNumerosSorteados.length == numeroMaximo) {
    asignarElementoTexto("p", "todos los numeros han sido sorteados, reinicia el juego para volver a jugar");// este verifica si todos los numeros han sido sorteados y muestra un mensaje en la pantalla
    } else {
    
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio(); // este llama a la funcion de nuevo si el numero generado ya esta en la lista de numeros sorteados

        } else { 
            listaNumerosSorteados.push(numeroGenerado); // este agrega el numero generado a la lista de numeros sorteados
            return numeroGenerado; // este retorna el numero generado

        }
    }    
}

function condicionesIniciales() {
    asignarElementoTexto("h1", "Bienvenido al juego de número secreto");// este asigna el texto al elemento h1
    asignarElementoTexto("p", `Ingrese un número del 1 al ${numeroMaximo}`);// este asigna el texto al elemento p
    numeroSecreto = generarNumeroAleatorio(); // este genera el numero secreto
    intentos = 1; // este reinicia los intentos a 1
}

function reiniciarJuego() {
    limpiarCaja(); // este limpia el input del usuario
    condicionesIniciales(); // este reinicia el juego
   document.getElementById("reiniciar").setAttribute("disabled", "true"); // este deshabilita el boton reiniciar
}

condicionesIniciales();// este llama a la funcion condiciones iniciales al cargar la pagina

