const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const mensaje = document.getElementById("mensaje").value;

    document.getElementById("resultadoNombre").textContent = nombre;
    document.getElementById("resultadoCorreo").textContent = correo;
    document.getElementById("resultadoDireccion").textContent = direccion;
    document.getElementById("resultadoMensaje").textContent = mensaje;

    document.getElementById("resultado").style.display = "block";
});

