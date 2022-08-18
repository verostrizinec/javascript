// quierocomprar.html

// INTERACTUAR CON HTML modificando precios

let focacciaGrande = document.querySelector(".focacciaGrande")
focacciaGrande.innerText = "Focaccia Grande = $1000"
console.log (focacciaGrande.innerText)

let brunch = document.getElementById("brunch")
brunch.innerText = "Oferta del dia $3000"
console.log (brunch.innerText)

// *Crear Elemento*

const lista = document.querySelector('.lista')
const li = document.createElement ('li')
li.innerText = "Vino o cerveza a elección"

lista.append(li)


// AGREGANDO EVENTOS

const agregarCarrito1 = document.querySelector('#focacciaGrande')
const agregarCarrito2 = document.querySelector('#panFocacciaChica')
const agregarCarrito3 = document.querySelector('#panChip')
const agregarCarrito4 = document.querySelector('#panBurguer')
const agregarCarrito5 = document.querySelector('#panMasaGrande')
const agregarCarrito6 = document.querySelector('#panMasaChico')
const agregarCarrito7 = document.querySelector('#panArtesano')
const agregarCarrito8 = document.querySelector('#panIntegral')
const agregarCarrito9 = document.querySelector('#brunchs')
const agregarCarrito10 = document.querySelector('#picada2')
const agregarCarrito11 = document.querySelector('#picada4')
const agregarCarrito12 = document.querySelector('#picada6')


agregarCarrito1.addEventListener('click', () => {
    console.log('Agregar Focaccia Grande al carrito')
})

agregarCarrito2.addEventListener('click', () => {
    console.log('Agregar Focaccia Chica al Carrito')
})

agregarCarrito3.addEventListener('click', () => {
    console.log('Agregar Chips Brioche al Carrito')
})

agregarCarrito4.addEventListener('click', () => {
    console.log('Agregar Pan de papa para Burgues al Carrito')
})

agregarCarrito5.addEventListener('click', () => {
    console.log('Agregar Pan de Masa Madre Grande al Carrito')
})

agregarCarrito6.addEventListener('click', () => {
    console.log('Agregar Pan de Masa Madre Chico al Carrito')
})

agregarCarrito7.addEventListener('click', () => {
    console.log('Agregar Pan Lacteado Artesano al Carrito')
})

agregarCarrito8.addEventListener('click', () => {
    console.log('Agregar Pan Lactal Integral al Carrito')
})

agregarCarrito9.addEventListener('click', () => {
    console.log('Agregar Brunch al Carrito')
})

agregarCarrito10.addEventListener('click', () => {
    console.log('Agregar Picada Comen 2, Pican 4 al Carrito')
})

agregarCarrito11.addEventListener('click', () => {
    console.log('Agregar Picada Comen 4, Pican 6 al Carrito')
})

agregarCarrito12.addEventListener('click', () => {
    console.log('Agregar Picada Comen 6, Pican 10 al Carrito')
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
