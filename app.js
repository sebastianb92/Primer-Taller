// declaro variables, en algunos casos las vi como const
let nombres = document.getElementById("nombres")
let apellidos = document.getElementById("apellidos")
let cedula = document.getElementById("cedula")
let consultorio = document.getElementById("consultorio")
let telefono = document.getElementById("telefono")
let correo = document.getElementById("correo")
let especialidad = document.getElementById("especialidad")
let edad = document.getElementById("edad")
let formularioMedicos = document.getElementById("registro-medicos-form")
let formularioPacientes = document.getElementById("registro-pacientes-form")
// Clase padre
class Main {
    constructor(nombres, apellidos, cedula, consultorio, telefono, correo, especialidad, edad) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = cedula
        this.consultorio = consultorio
        this.telefono = telefono
        this.correo = correo
        this.especialidad = especialidad
        this.edad = edad
    }
}


// Traer medicos del local Storage

if (window.location.href.endsWith("registro-medicos.html")) {

    formularioMedicos.addEventListener("submit", function (eventMedicos) {
        eventMedicos.preventDefault()
        let valorNombres = nombres.value
        let valorApellidos = apellidos.value
        let valorCedula = cedula.value
        let valorConsultorio = consultorio.value
        let valorTelefono = telefono.value
        let valorCorreo = correo.value
        let valorEspecialidad = especialidad.value
        // Constructor, se hereda de la clase padre
        const medico = new Main(valorNombres, valorApellidos, valorCedula, valorConsultorio, valorTelefono, valorCorreo, valorEspecialidad)

        let medicos = []
        
        let localMedicos = localStorage.getItem("medicos")
        if (localMedicos) {
            medicos = JSON.parse(localMedicos)
        }
        medicos.push(medico)

        localStorage.setItem("medicos", JSON.stringify(medicos))
        alert("Medico registrado")
    })

}

// Mostrar listado de medicos

const mostrarMedicos = function () {
    let medicos = []
    let tablaMedicos = document.getElementById("tabla-medicos")
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.forEach(medico => {
        let datoMedico = document.createElement("tr")
        let celdaNombres = datoMedico.insertCell()
        let celdaApellidos = datoMedico.insertCell()
        let celdaCedula = datoMedico.insertCell()
        let celdaConsultorio = datoMedico.insertCell()
        let celdaTelefono = datoMedico.insertCell()
        let celdaCorreo = datoMedico.insertCell()
        let celdaEspecialidad = datoMedico.insertCell()
        let celdaPaciente = datoMedico.insertCell()

        celdaNombres.textContent = medico.nombres
        celdaApellidos.textContent = medico.apellidos
        celdaCedula.textContent = medico.cedula
        celdaConsultorio.textContent = medico.consultorio
        celdaTelefono.textContent = medico.telefono
        celdaCorreo.textContent = medico.correo
        celdaEspecialidad.textContent = medico.especialidad
        celdaPaciente.textContent = "Pendiente"
        tablaMedicos.appendChild(datoMedico)
    })
}

if (window.location.href.endsWith("listado-medicos.html")) {
    mostrarMedicos()
}


// Traer pacientes del local Storage

if (window.location.href.endsWith("registro-pacientes.html")) {

    formularioPacientes.addEventListener("submit", function (eventPacientes) {
        eventPacientes.preventDefault()
        let valorNombres = nombres.value
        let valorApellidos = apellidos.value
        let valorCedula = cedula.value
        let valorEdad = edad.value
        let valorTelefono = telefono.value
        let valorEspecialidad = especialidad.value
        
        // Preguntar a la profe !!
        const paciente = new Main(valorNombres, valorApellidos, valorCedula)
        paciente.edad=valorEdad
        paciente.telefono=valorTelefono
        paciente.especialidad=valorEspecialidad
        console.log(paciente)
        let pacientes = []

        let localPacientes = localStorage.getItem("pacientes")
        if (localPacientes) {
            pacientes = JSON.parse(localPacientes)
        }
        pacientes.push(paciente)

        localStorage.setItem("pacientes", JSON.stringify(pacientes))
        alert("Paciente registrado")
    })

}


// Mostrar listado de pacientes

const mostrarPacientes = function () {
    let pacientes = []
    let tablaPacientes = document.getElementById("tabla-pacientes")
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.forEach(paciente => {
        let datoPaciente = document.createElement("tr")
        let celdaNombres = datoPaciente.insertCell()
        let celdaApellidos = datoPaciente.insertCell()
        let celdaCedula = datoPaciente.insertCell()
        let celdaEdad = datoPaciente.insertCell()
        let celdaTelefono = datoPaciente.insertCell()
        let celdaEspecialidad = datoPaciente.insertCell()
        let celdaMedico = datoPaciente.insertCell()

        celdaNombres.textContent = paciente.nombres
        celdaApellidos.textContent = paciente.apellidos
        celdaCedula.textContent = paciente.cedula
        celdaEdad.textContent = paciente.edad
        celdaTelefono.textContent = paciente.telefono
        celdaEspecialidad.textContent = paciente.especialidad
        celdaMedico.textContent = "Pendiente"
        tablaPacientes.appendChild(datoPaciente)
    })
}

if (window.location.href.endsWith("listado-pacientes.html")) {
    mostrarPacientes()
}