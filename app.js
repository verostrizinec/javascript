// Saludar al Usuario

let nombreUsuario = prompt("Ingresa tu nombre")
alert ("Bienvenido/a a Tritato" + " " + nombreUsuario)

// Calcular IVA de producto

let precio = 10000;
let precioConIva = precio * 1.21;

alert (precioConIva)

console.log("Fin del Programa")

// Calcular precio de un producto
const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.21

let precioProducto = 10000
let descuento = 50

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

console.log(nuevoPrecio)