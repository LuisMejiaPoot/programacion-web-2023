const guitarrasSeleccionadas = new Set();
function agregarAlCarrito(boton) {
    const nombreGuitarra = boton.parentElement.querySelector("h1").textContent;
    if (guitarrasSeleccionadas.has(nombreGuitarra)) {
        alert("Guitarra seleccionada, intenta con otro producto.");
    } else {
        guitarrasSeleccionadas.add(nombreGuitarra);
        const precioGuitarra = boton.closest(".item").querySelector("p:last-child").textContent;
        alert(`Usted acaba de agregar al carrito ${nombreGuitarra} con un precio de ${precioGuitarra}`);
    }
}