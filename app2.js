// quierocomprar.html

// INTERACTUAR CON HTML modificando precios

let FocacciaGrande = document.querySelector(".FocacciaGrande")
FocacciaGrande.innerText = "Focaccia Grande = $1000"
console.log (FocacciaGrande.innerText)

let brunch = document.getElementById("brunch")
brunch.innerText = "Oferta del dia $3000"
console.log (brunch.innerText)

// *Crear Elemento*

const lista = document.querySelector('.lista')
const li = document.createElement ('li')
li.innerText = "Vino o cerveza a elección"

lista.append(li)

// AGREGANDO EVENTOS

const agregarCarrito1 = document.querySelector('#carrito1')
const agregarCarrito2 = document.querySelector('#carrito2')
const agregarCarrito3 = document.querySelector('#carrito3')

agregarCarrito1.addEventListener('click', () => {
    console.log('Agregar al carrito')
})

agregarCarrito2.addEventListener('click', () => {
    console.log('Agregar Brunch al Carrito')
})

agregarCarrito3.addEventListener('click', () => {
    console.log('Agregar Picada al Carrito')
})

// MODAL //

const modalContainer = document.querySelector('#modal-container')

const abrirModal = document.querySelector('#modal-open')
const cerrarModal = document.querySelector('#modal-close')

abrirModal.addEventListener('click', () => {
    modalContainer.classList.add('modal-container-active')
})

cerrarModal.addEventListener('click',() =>{
    modalContainer.classList.remove('modal-container-active')
})




