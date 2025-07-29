let registros = [];

if(localStorage.getItem("registros")){
    registros = JSON.parse(localStorage.getItem("registros"));
}else{

    const form = document.getElementById("registro-form");

    form.addEventListener("submit", function(event){
        event.preventDefault(); // evita recargar la página

        // Tomar los datos
        const nombre = document.getElementById("nombre").value;
        const tipoDocumento = document.getElementById("tipo-de-documento").value;
        const numeroDocumento = document.getElementById("numero-identificacion").value;
        const habitacion = document.getElementById("habitacion").value;
        const servicio = document.getElementById("servicio").value;


        const nuevoRegistro = {
            nombre: nombre,
            tipoDocumento : tipoDocumento,
            numeroDocumento : numeroDocumento,
            habitacion : habitacion,
            servicio : servicio
        };

        registros.push(nuevoRegistro);

        localStorage.setItem("registros", JSON.stringify(registros));

        localStorage.setItem("ultimoNombre", nombre);

        window.location.href = "/ingresado/ingresado.html";

        form.reset();

    });
}
