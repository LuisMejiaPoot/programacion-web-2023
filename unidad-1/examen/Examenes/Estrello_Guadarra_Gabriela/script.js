let carrito = {};

let datos  = {}

datos["key1"] = 10;
datos["key2"] = 20;
datos["key1"] = 30;

let arreglo = [1,2,4,55,5,6,5]
function agregarAlCarrito(nombre, precio){
    if (carrito[nombre]){
        alert("Guitarra seleccionada, intenta con otro producto");
    }else{
        carrito[nombre] = nombre;
        alert('Usted agregó al carrito ' + nombre + ' con un precio de ' + precio);
    }
}