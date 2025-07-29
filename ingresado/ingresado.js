const nombre = localStorage.getItem("ultimoNombre");
    const mensaje = document.getElementById("mensaje");

    if(nombre){
        mensaje.textContent = `¡Bienvenido a tu aventura, ${nombre}!`;
    }