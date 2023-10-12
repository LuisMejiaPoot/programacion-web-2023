const elementosBotones = new Set();

function colocarElementos(event){

    const buttonId = event.target.id;

    if (elementosBotones.has(buttonId)) {
        alert("El producto ya está en el carrito");
    } else {
        elementosBotones.add(buttonId);
        
        const contenedorPadre = event.currentTarget.closest('.master-image')
        const tituloItem = contenedorPadre.querySelector(".item-title h2").textContent;
        const precioItem = contenedorPadre.querySelector(".item-price p").textContent;

        alert(`¡Producto ${tituloItem} con precio ${precioItem} agregado con éxito!`);
    }
}

const botones = document.querySelectorAll(".boton-para-comprar")

botones.forEach((boton) => {
    boton.addEventListener("click", colocarElementos);
})
