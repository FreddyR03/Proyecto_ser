 // Cargar registros 
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

this.scoresData = { players: [] };

// Botón Exportar
document.getElementById("descargar-pdf").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título del documento
    doc.setFontSize(18);
    doc.text("Listado de Registros", 14, 15);

    // Generar tabla automáticamente a partir de la tabla HTML
    doc.autoTable({
        html: "#tabla",  // Usa directamente tu tabla del DOM
        startY: 25,
        styles: {
            fontSize: 10,
            cellPadding: 2
        },
        headStyles: {
            fillColor: [41, 128, 185]
        }
    });

    // Guardar el PDF
    doc.save("registros.pdf");
});
