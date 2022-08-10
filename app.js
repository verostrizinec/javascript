// Proyecto JavaScript = TRITATO

// INCORPORAR ARRAY
// Lista de productos de Tritato

const tritato = []

class producto {
    constructor(id, tipoDeProducto, precio, especialidad) {
        this.id = id;
        this.tipoDeProducto = tipoDeProducto;
        this.precio = precio;
        this.especialidad = especialidad;
    }
}

const producto1 = new producto (id= 1, "Picada", 2750, "Comen 2 Pican 4")
tritato.push (producto1)

const producto2 = new producto (id= 2, "Picada 2", 5500, "Comen 4 Pican 8")
tritato.push (producto2)

const producto3 = new producto (id= 3, "Picada 3", 8200, "Comen 6 Pican 10")
tritato.push (producto3)

const producto4 = new producto (id= 4, "Brunch", 3500, "Sandwich de Lomo y Queso, en Pan de Masa Madre. Scones de Queso y Tomillo. Mini Budines de Naranja y Amapolas. Lingote de Chocotorta. Juego de Naranja exprimido. Infusiones")
tritato.push (producto4)

const producto5 = new producto (id= 5, "Panificados", 850, "Focaccia Grande")
tritato.push (producto5)

const producto6 = new producto (id= 6, "Panificados", 550, "Focaccia Chica")
tritato.push (producto6)

const producto7 = new producto (id= 7, "Panificados", 650, "Chips Brioche (12 unidades)")
tritato.push (producto7)

const producto8 = new producto (id= 8, "Panificados", 400, "Pan de Papa para Burguer (4 unidades)")
tritato.push (producto8)

const producto9 = new producto (id= 9, "Panificados", 850, "Pan de Masa Madre Grande")
tritato.push (producto9)

const producto10 = new producto (id= 10, "Panificados", 550, "Pan de Masa Madre Chico")
tritato.push (producto10)

const producto11 = new producto (id= 11, "Panificados", 500, "Pan Lacteado Artesano")
tritato.push (producto11)

const producto12 = new producto (id= 12, "Panificados", 500, "Pan Lactal Integral")
tritato.push (producto12)

console.log(tritato)

// FIND PARA BUSCAR UN PRODUCTO

const buscarProducto = tritato.find((producto) => producto.tipoDeProducto === "Panificados")
console.log(buscarProducto)

// FILTRAR UN PRODUCTO

const buscarPedido = tritato.filter((producto) => producto.precio === 850)
console.log(buscarPedido)

// CREAR FUNCIONES PARA REALIZAR OPERACIONES

let resultado = 0;

function sumar (primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
function mostrar (sumaDeProductos) {
    console.log(sumaDeProductos)
}
sumar (500, 500)
mostrar (resultado)

// *Crear Elemento*

const div = document.createElement('div')
const rowElaboraciones = document.getElementById('row-elaboraciones')

div.className = "container my-2"
div.innerHTML = "<h5>Todos los productos los podes acompañar con vino o cerveza</h5>"

rowElaboraciones.append(div)

console.log(div)

console.log('Fin del programa')

// Evento del formulario

const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector('#input-apellido')
const inputDireccion = document.querySelector('#input-direccion')
const inputTelefono = document.querySelector('#input-telefono')
const formulario = document.querySelector('#formulario')

inputNombre.addEventListener('change', () =>{
    console.log( inputNombre.value )
})

inputApellido.addEventListener('change', () =>{
    console.log( inputApellido.value )
})

inputDireccion.addEventListener('change', () =>{
    console.log( inputDireccion.value )
})

inputTelefono.addEventListener('change', () =>{
    console.log( inputTelefono.value )
})

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const direccion = inputDireccion.value
    const telefono = inputTelefono.value

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion, 
        telefono: telefono
    }

    console.log(usuario)
})