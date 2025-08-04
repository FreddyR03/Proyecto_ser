let registros = JSON.parse(localStorage.getItem("registros")) || [];

const form = document.getElementById("registro-form");
if (form) {
    form.addEventListener("submit", function(event){
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const tipoDocumento = document.getElementById("tipo-de-documento").value;
        const numeroDocumento = document.getElementById("numero-identificacion").value;
        const habitacion = document.getElementById("habitacion").value;
        const servicio = document.getElementById("servicio").value;

        const nuevoRegistro = {
            nombre,
            tipoDocumento,
            numeroDocumento,
            habitacion,
            servicio
        };

        registros.push(nuevoRegistro);
        localStorage.setItem("registros", JSON.stringify(registros));
        localStorage.setItem("ultimoNombre", nombre);

        window.location.href = "/ingresado.html";
        form.reset();
    });
}

