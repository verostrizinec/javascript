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


