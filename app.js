// Proyecto JavaScript = TRITATO

// Saludar al Usuario

let nombreUsuario = prompt("Ingresa tu nombre")
alert ("Bienvenido/a a Tritato" + " " + nombreUsuario)

// INCORPORAR ARRAY
// Lista de productos de Tritato

const tritato = []

class producto {
    constructor(tipoDeProducto, precio, especialidad) {
        this.tipoDeProducto = tipoDeProducto;
        this.precio = precio;
        this.especialidad = especialidad;
    }
}

const producto1 = new producto ("Picada", 2750, "Comen 2 Pican 4")
tritato.push (producto1)

const producto2 = new producto ("Picada 2", 5500, "Comen 4 Pican 8")
tritato.push (producto2)

const producto3 = new producto ("Picada 3", 8200, "Comen 6 Pican 10")
tritato.push (producto3)

const producto4 = new producto ("Brunch", 3500, "Sandwich de Lomo y Queso, en Pan de Masa Madre. Scones de Queso y Tomillo. Mini Budines de Naranja y Amapolas. Lingote de Chocotorta. Juego de Naranja exprimido. Infusiones")
tritato.push (producto4)

const producto5 = new producto ("Panificados", 850, "Focaccia Grande")
tritato.push (producto5)

const producto6 = new producto ("Panificados", 550, "Focaccia Chica")
tritato.push (producto6)

const producto7 = new producto ("Panificados", 650, "Chips Brioche (12 unidades)")
tritato.push (producto7)

const producto8 = new producto ("Panificados", 400, "Pan de Papa para Burguer (4 unidades)")
tritato.push (producto8)

const producto9 = new producto ("Panificados", 850, "Pan de Masa Madre Grande")
tritato.push (producto9)

const producto10 = new producto ("Panificados", 550, "Pan de Masa Madre Chico")
tritato.push (producto10)

const producto11 = new producto ("Panificados", 500, "Pan Lacteado Artesano")
tritato.push (producto11)

const producto12 = new producto ("Panificados", 500, "Pan Lactal Integral")
tritato.push (producto12)

console.log(tritato)

// FIND PARA BUSCAR UN PRODUCTO

const buscarProducto = tritato.find((producto) => producto.tipoDeProducto === "Panificados")
console.log(buscarProducto)

// FILTRAR UN PRODUCTO

const buscarPedido = tritato.filter((producto) => producto.precio === 850)
console.log(buscarPedido)





console.log('Fin del programa')

// ***DESAFIO ANTERIOR***
// Calcular IVA de producto (Segundo desafio)

// let precio = 10000;
// let precioConIva = precio * 1.21;

// alert (precioConIva)

// console.log("Fin del Programa")

// // Calcular precio de un producto
// const suma = (a,b) => a + b
// const resta = (a,b) => a - b
// const iva = x => x * 0.21

// let precioProducto = 10000
// let descuento = 50

// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

// console.log(nuevoPrecio)