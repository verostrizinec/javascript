// Proyecto JavaScript = TRITATO
const tritato = []

class producto {
    constructor(id, tipoDeProducto, precio, especialidad, img) {
        this.id = id;
        this.tipoDeProducto = tipoDeProducto;
        this.precio = precio;
        this.especialidad = especialidad;
        this.img = img;
    }
}

tritato.push(new producto (1, "Picada", 2750, "Comen 2 Pican 4", '../images/picadaa.JPG')),
tritato.push(new producto (2, "Picada", 5500, "Comen 4 Pican 8", '../images/picadaa.JPG'))
tritato.push(new producto (3, "Picada", 8200, "Comen 6 Pican 10", '../images/picadaa.JPG'))
tritato.push(new producto (4, "Brunch", 3500, "Sandwich de Lomo y Queso, en Pan de Masa Madre. Scones de Queso y Tomillo. Mini Budines de Naranja y Amapolas. Lingote de Chocotorta. Juego de Naranja exprimido. Infusiones", '../images/brunchs.jpg'))
tritato.push(new producto (5, "Panificados", 850, "Focaccia Grande", '../images/panMasaMadre2.jpg'))
tritato.push(new producto (6, "Panificados", 550, "Focaccia Chica", '../images/panMasaMadre2.jpg'))
tritato.push(new producto (7, "Panificados", 650, "Chips Brioche (12 unidades)", '../images/panMasaMadre2.jpg'))
tritato.push(new producto (8, "Panificados", 400, "Pan de Papa para Burguer (4 unidades)", '../images/panMasaMadre2.jpg'))
tritato.push(new producto (9, "Panificados", 850, "Pan de Masa Madre Grande", '../images/panMasaMadre2.jpg'))
tritato.push(new producto (10, "Panificados", 550, "Pan de Masa Madre Chico", '../images/panMasaMadre2.jpg'))
tritato.push(new producto (11, "Panificados", 500, "Pan Lacteado Artesano", '../images/panMasaMadre2.jpg'))
tritato.push(new producto (12, "Panificados", 500, "Pan Lactal Integral", '../images/panMasaMadre2.jpg'))

// INCORPORAR ARRAY
// Lista de productos de Tritato

// FIND PARA BUSCAR UN PRODUCTO

const buscarProducto = tritato.find((producto) => producto.tipoDeProducto === "Panificados")
console.log(buscarProducto)

// FILTRAR UN PRODUCTO

const buscarPedido = tritato.filter((producto) => producto.precio === 850)
console.log(buscarPedido)

// CREAR FUNCIONES PARA REALIZAR OPERACIONES

let resultado = 0;

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
function mostrar(sumaDeProductos) {
    console.log(sumaDeProductos)
}
sumar(500, 500)
mostrar(resultado)

// *Crear Elemento*

const div = document.createElement('div')
const rowElaboraciones = document.getElementById('row-elaboraciones')

div.className = "container my-2"
div.innerHTML = "<h5>Todos los productos los podes acompañar con vino o cerveza</h5>"

rowElaboraciones.append(div)

console.log(div)

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

/*Boton que te direcciona a la pagina de compra */

const btnComprar = document.querySelector(".btn-index")
btnComprar.addEventListener('click', () => {
    location.href= "pages/quieroComprar.html"
})



// Aplicando libreria al instagram del footer
const instagram = document.querySelector('#text-footer')
instagram.addEventListener('click', () => {
   
    Toastify({
        text: "Click aca para ir al Instagram de Tritato",
        duration: 3000,
        destination: 'https://www.instagram.com/tritato_',
        style: {
        background: "linear-gradient(to right, #412F26, #e4b866)"
        },
    }).showToast();

})


