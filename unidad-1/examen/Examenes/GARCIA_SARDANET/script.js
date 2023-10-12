let cart = new Set();

function addToCart(guitarName, price)
{
    if (cart.has(guitarName)) {
        alert(`Esta guitarra ${guitarName} esta seleccionada, intenta con otro producto.`);
    } else {
        cart.add(guitarName);
        alert(`Usted agrego al carrito ${guitarName} con un precio de $${price}.`);
    }
}