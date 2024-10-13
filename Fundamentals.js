//Variables
var caseSW = "Pikachu-025";
//Recomendables
let control = "Xbox - inalámbrico Series S/X";
const figure = "Yoshi Pansón";
console.log("--------------------VARIABLES----------------------------------");
console.log(`Los artículos en su carrito son: ${caseSW}, ${control}, ${figure} \n`);

//Strings
let mouse = "Mouse Gamer Logitech G203"
console.log("--------------------STRINGS----------------------------------");
console.log("Número de letras:",mouse.length);
console.log("Encotrar alguna palabra:",mouse.includes("Kart"));
console.log("Convertir a mayúsculas:",mouse.toUpperCase());
console.log("Convertir a minusculas:",mouse.toLowerCase());
console.log("Quitar espacios adelante y atrás:",mouse.trim());
console.log("Reemplazar una palabra:",mouse.replace('Kart','Kart-Rider'));
console.log("Cortar un texto:",mouse.slice(1,6));
console.log("Cortar un texto:",mouse.substring(1,6));
console.log("Cortar un texto:",mouse.charAt(1));
console.log("Repetir un texto:",mouse.repeat(2));
console.log("Dividir un texto:",mouse.split(" "),"\n");

//Numbers
const priceDisplay1 = 550;
const priceDisplay2 = 852;
console.log("--------------------Numbers----------------------------------");
console.log(`El precio del Monitor es: $ ${priceDisplay1}`);
console.log("suma:",priceDisplay1+100);
console.log("resta:",priceDisplay1-100);
console.log("multiplicación:",priceDisplay1*100);
console.log("división:",priceDisplay1/100);
console.log("módulo:",priceDisplay1%100);
console.log("--------------------MATH----------------------------------");
console.log("El método Math es un: ", Math);
console.log("constante PI:",Math.PI);
console.log("Redondear el precio de un producto (Monitor): ", Math.round(priceDisplay1));
console.log("Raíz cudrada de un valor (Monitor):", Math.sqrt(priceDisplay1));
console.log("valor absoluto de un valor (Monitor):",Math.abs(priceDisplay1));
console.log("Exponente de un valor (Monitor):", Math.pow(priceDisplay1));
console.log("valor mínimo de entre 2 valores (Monitores):", Math.min(priceDisplay1,priceDisplay2));
console.log("Valor máximo de entre 2 valores (Monitores):", Math.max(priceDisplay1,priceDisplay2));
console.log("Valor random de entre o a 20:", Math.round(Math.random()*20));
console.log("--------------------CONVERSIONES----------------------------------");
let cantidadUnidades = "17"
let priceKey = "45.65"
console.log(Number.parseInt(cantidadUnidades));
console.log(Number.parseFloat(priceKey));
console.log(Number.isInteger(cantidadUnidades));
console.log(`${+cantidadUnidades + +priceKey} \n`);

//Boolean
console.log("--------------------BOOLEANS----------------------------------");
// operadores de asignación 
let numeroGames = 280
let juegosDisponibles = 3600
let estadoJugador
let cuentaConfirmada = null
// operadores de asignación de adición
juegosDisponibles += 8
console.log(juegosDisponibles);
// operadores de comparación
let juegosDisponiblesGamers="3600"
console.log(juegosDisponibles == juegosDisponiblesGamers)
// evalua tipo de dato y contenido
console.log(juegosDisponibles === juegosDisponiblesGamers)
console.log(estadoJugador === cuentaConfirmada);
// operadores aritméticos
console.log(juegosDisponibles + parseInt(juegosDisponiblesGamers));
// operadores lógicos 
console.log(juegosDisponibles != juegosDisponiblesGamers);
// evalua tipo de dato y contenido
console.log(juegosDisponibles !== parseInt(juegosDisponiblesGamers));

const respuesta = numeroGames <= 300 ? "Bienvenido" : "No se aceptan más jugadores"
console.log(respuesta,"\n");

//Conditionals
console.log("--------------------CONDITIONALS----------------------------------");
//Simple
const drivers = [];
let result = drivers.length <= 0 ? "Instale drivers." : "";
console.log(result);
//Doble
const marcas = ['Corsair','Raizer','RedDragon','Meetion','Logitech'];
let message = marcas.length != 0 ? `Marcas disponibles ${marcas.length}.` : "No existen marcas disponibles.";
console.log(message);
//Multiple

const section = 2

switch (section) {
    case 1:
        console.log("Mouses");
    break;
    case 2:
        console.log("Cases");
    break;
    case 3:
        console.log("Monitores");
    break;
    default:
        console.log(`No existe tarea para la actividad ${section}`);
    break;
}

//BUCLES

console.log("--------------------BUCLES ----------------------------------");

//FOR

const puntos = 10

for (let i = puntos; i >= 0; i--) {
    
    i <=0 ? console.log("Juego Descargado"):console.log(i);
}

//WHILE

let puntos1 = 10

while (puntos1 >= 0)
{
    puntos1<=0 ? console.log("Juego Descargado"):console.log(puntos1);
    puntos1--;
}

//DO-WHILE

let puntos2 = 10

do {
    puntos2<=0 ? console.log("Juego Descargado"):console.log(puntos2);
    puntos2--;
} while (puntos2 >= 0);

//ForEach - Forof - Forin -Map

const articulosPendientes = ['Mouse','Case','Teclado','Laptops','Cámaras']
const cliente ={
    nombre:"Paul",
    apellido:"Cabrera",
}

// uso del forEach 
articulosPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of articulosPendientes) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in cliente) {
    console.log(`${cliente[clave]}`)
}

// uso del map -> retorna un nuevo arreglo
const nuevosAriculos = articulosPendientes.map((t)=> t)
console.log(nuevosAriculos);

//Funciones anonimas 
const calcularPrecioConDescuento = function(precioSonic, descuentoSoporteSonic) {
    console.log(`El precio del producto con descuento de 8% es: ${precioSonic - ((descuentoSoporteSonic / 100) * precioSonic)}`);
};
calcularPrecioConDescuento(precioSonic, descuentoSoporteSonic); 

//Función autoejecutable
(function (precioSonic = 65.00, descuentoSoporteSonic = 8){
    const respuestaDescuento =  +precioSonic - ((descuentoSoporteSonic/100)*+precioSonic)
    console.log(`El precio del producto con descuento de 8% es: ${respuestaDescuento}`);
})()

//Función declarada 
function descuentoResultante (precioSonic, descuentoSoporteSonic){
    console.log(`El precio del producto con descuento de 8% es: ${precioSonic - 
        ((descuentoSoporteSonic / 100) * precioSonic)}`);
}
descuentoResultante(precioSonic, descuentoSoporteSonic)

//Argumentos y parámetros
//Parámetros por default 
function descuentoResultante2 (precioSonic, descuentoSoporteSonic = 10){
    console.log(`El precio del producto con descuento de 8% es: ${precioSonic - 
        ((descuentoSoporteSonic / 100) * precioSonic)}`);
}
descuentoResultante2(precioSonic)

//Parámetros rest 
function infoPedidoMouse (nombreMouse, precioMouse, cantidadSolicitada, ...masInformacion){
    console.log("El nombre del mouse es:", nombreMouse), 
    console.log("El precio del mouse es:", precioMouse), 
    console.log("La cantidad solicitada es:", cantidadSolicitada), 
    console.log("Más información del mouse:", masInformacion)
}; 
infoPedidoMouse("Mouse Gamer Inalámbrico E-Yooso X31", 15.00, 3, "Botones: 6", 
    "Conectividad USB Plug and Play: Sin complicaciones, simplemente conecta y listo.", 
    "Superficie Amplia del Mouse: Ofrece precisión y control para juegos y tareas profesionales."); 

//Retorno de una función 
function infoVideoJuego (){
    return "videojuego\n"; 
}
console.log(infoVideoJuego()); 

//Funcion flecha
//Para iniciar sesion el usuario debe estar registrado
const verificarRegistro = (usuarioRegistrado) => {
    if (usuarioRegistrado) {
        console.log("El usuario está registrado.");
    } else {
        console.log("El usuario no se encuentra registrado. Registrese por favor.");
    }
};