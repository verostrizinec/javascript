let respuestaUsuario = Number(prompt('Que tabla queres conocer?'))

alert("Vamos a mostrar la tabla del 10")

// For

for (let i = 1; i <= 10; i++) {
    alert(i + " x " + respuestaUsuario + " = " + i*respuestaUsuario)
}

console.log('Fin del programa')

let respuesta = prompt('Vas a entregar el proyecto?')

if (respuesta === "si") {
    alert('Si, voy a entregar') 
} else { 
    alert('No voy a entregar')
}

// While

let primerDato = prompt("Practicamos While?")

while (primerDato != "ESC") {
    alert("El usuario ingresó" + primerDato);

    primerDato = prompt("Salir")
    break
}