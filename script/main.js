const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#error");

let mensajeError = []
function validar(e) {
    e.preventDefault() // Evita que se envíe el formulario
    mensajeError = []
    // Validar nombre que no esté vacío
    nombre.value.trim().length === 0 ? mensajeError.push("El nombre es obligatorio") : null
    // Validar que el nombre solo contenga letras
    !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) ? mensajeError.push("El nombre solo puede contener caracteres válidos") : null
    //Validar correo electrónico
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) ? mensajeError.push("El correo electrónico no es válido") : null
    //Validar telefono español
    !/^[6|7|9][0-9]{8}$/.test(telefono.value.trim()) ? mensajeError.push("El teléfono no es válido") : null
    //Validar matricula espñola moderna SIN VOCALES
    !/^[0-9]{4}\s[B-DF-HJ-NP-TV-Z]{3}$/.test(matricula.value.trim()) ? mensajeError.push("La matrícula no es válida") : null
    //Validar mensaje
    mensaje.value.trim().length < 10 ? mensajeError.push("El mensaje debe tener al menos 10 caracteres") : null
    //Tratamiento del envio del mensaje
    if (mensajeError.length === 0 && confirm("¿Desea enviar el formulario?")) {
        formulario.submit()
    } else if (mensajeError.length > 0) {
        errores.textContent = ""
        mensajeError.forEach(function (error){
            const createLi = document.createElement("li")
            createLi.textContent = error
            errores.appendChild(createLi)
        })
    }
}
//Envio del formulario
formulario.addEventListener("submit", validar)