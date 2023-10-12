const boton1 = document.querySelector("#comprae1")
const boton2 = document.querySelector("#compra2")
const boton3 = document.querySelector("#compra3")
const boton4 = document.querySelector("#compra4")
const boton5 = document.querySelector("#compra5")
const boton6 = document.querySelector("#compra6")
const boton7 = document.querySelector("#compra7")
const boton8 = document.querySelector("#compra8")
const comprar = document.querySelector("#comprar")


var guitarrasSeleccionadas = [];

function agregarAlCarrito(nombre, precio) {
    if (guitarrasSeleccionadas.includes(nombre)) {
        alert("Guitarra seleccionada intenta con otro producto.");
    } else {
        guitarrasSeleccionadas.push(nombre);
        alert("Usted agrego al carrito: " + nombre + " con un precio de $" + precio);
    }
}

boton1.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #1", 3400);
});

boton2.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #2", 4500);
});

boton3.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #3", 5032);
});

boton4.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #4", 10000);
});

boton5.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #5", 4990);
});

boton6.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #6", 78);
});

boton7.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #7", 5940);
});

boton8.addEventListener("click", function () {
    agregarAlCarrito("Guitarra #8", 16000);
});

comprar.addEventListener("click", function () {
    location.reload();
});