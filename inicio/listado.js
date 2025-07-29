 // Cargar registros del localStorage
 const registros = JSON.parse(localStorage.getItem("registros")) || [];

 const tbody = document.querySelector("#tabla tbody");

 function mostrarTabla() {
     tbody.innerHTML = "";
     registros.forEach(r => {
         const fila = document.createElement("tr");
         fila.innerHTML = `
             <td>${r.nombre}</td>
             <td>${r.tipoDocumento}</td>
             <td>${r.numeroDocumento}</td>
             <td>${r.habitacion}</td>
             <td>${r.servicio}</td>
         `;
         tbody.appendChild(fila);
     });
 }

 mostrarTabla();

 document.getElementById("borrar").addEventListener("click", () => {
     if (confirm("¿Seguro que quieres borrar todos los registros?")) {
         localStorage.removeItem("registros");
         location.reload();
     }
 });