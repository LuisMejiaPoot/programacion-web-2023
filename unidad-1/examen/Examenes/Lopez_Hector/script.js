function addToCart(item) {
const itemName = item.querySelector('h2').textContent;
const itemPrice = item.querySelector('.price').textContent;
const alertMessage = `Usted agrego al carrito:${itemName} con un precio de:${itemPrice}`;
alert(alertMessage);
}

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach((button) => {
button.addEventListener('click', () => {
    const productContainer = button.closest('.product-container');
    addToCart(productContainer);
    });
});

// si funciona el codigo lo unico es que no pude hacer que el boton de agregar a carrito este fuera del product box
// pero dentro del catalog container asi que no lo inclui. creo que la solucion seria separarlo con otro div y flexbox
// pero no me dio el tiempo.