var carrito = [];

function agregarAlCarrito(nombre, precio) {
    if (carrito.includes(nombre)) {
        alert("Guitarra seleccionada, intenta con otro producto.");
    } else {
        carrito.push(nombre);
        alert("Usted ha agregado al carrito " + nombre + " con un precio de $" + precio);
    }
}

function mostrarMensaje(mensaje) {
    var carritoDiv = document.getElementById("carrito");
    var mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = mensaje;
    carritoDiv.appendChild(mensajeDiv);
}
