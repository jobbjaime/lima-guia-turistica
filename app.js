      /* Componente 1
      Al entrar a mi pagina web quiero que al usar se le pregunte la edad, si el usuario es menor entonces vamos a mostrar un banner indicando que para visitar los lugares debe estar acompañado, en caso sea mayor de edad es necesario mostrar nada */
    //   const edad = prompt("Ingrese su edad");

    //   const edadNumber = parseInt(edad);

    //   if (edadNumber < 18) {

    //     document.write(
    //       "<div class='banner'>Recuerda visitar los lugares con un adulto</div>"
    //     );
          
        
    //   }




const backgrounColor = 
prompt("Ingrese un color, este será el color de fondo de la pagina");

//Vamos a acceder al boddy

document.body.style.background = backgrounColor

//Primera función del boton Juego1
function registrarHermanos() {
    //Me pregunta la cantidad de hermanos
    const cantidadDeHermanos = parseInt(prompt("Ingrese la cantidad de hermanos"));
    //Va a preguntar de forma dinamica el nombre de cada hermanos
    
    //arreglo de hermanos
    const nombresDeHermanos = [];
    
    //dentro de los parentesis va a una condicion
    
    let contador = 0;
    while (contador < cantidadDeHermanos) {
        const hermano = prompt("Ingresa el nombre del hermano" + contador);
        nombresDeHermanos.push(hermano);
        
        
    // Vital: sumarle 1 al contador
    
    contador ++; // doble + es sumarle uno a la variable.
    }
    
    console.log(nombresDeHermanos);
}

// Segunda función del botón Juego2
function generarBloques() {
    const container = document.getElementById('bloques-container');
    container.innerHTML = ''; // Limpiar bloques anteriores
    
    let cantidadBloques = parseInt(prompt("¿Cuántos bloques deseas generar?"));
    
    while (isNaN(cantidadBloques) || cantidadBloques < 0) {
        cantidadBloques = parseInt(prompt("Por favor, ingresa un número válido:"));
    }
    
    for (let i = 0; i < cantidadBloques; i++) {
        const bloque = document.createElement('div');
        bloque.style.width = '100px';
        bloque.style.height = '100px';
        bloque.style.backgroundColor = generarColorAleatorio();
        bloque.style.display = 'inline-block';
        bloque.style.margin = '5px';
        container.appendChild(bloque);
    }
}

function generarColorAleatorio() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Tercera función del boton Juego3
function jugarYanquenpo() {
    const opciones = ['piedra', 'papel', 'tijera'];
    let eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
    
    while (!opciones.includes(eleccionUsuario)) {
        eleccionUsuario = prompt("Por favor, elige una opción válida: piedra, papel o tijera").toLowerCase();
    }
    
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    
    let resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
    
    alert(`
        Tu elección: ${eleccionUsuario}
        Computadora: ${eleccionComputadora}
        ${resultado}
    `);
}

function determinarGanador(usuario, computadora) {
    if (usuario === computadora) {
        return "¡Empate!";
    }
    
    const reglas = {
        'piedra': 'tijera',
        'tijera': 'papel',
        'papel': 'piedra'
    };
    
    return reglas[usuario] === computadora ? 
        "¡Ganaste! 🎉" : 
        "¡La computadora ganó! 😢";
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnGenerarBloques').addEventListener('click', generarBloques);
    document.getElementById('btnJugarYanquenpo').addEventListener('click', jugarYanquenpo);
});


