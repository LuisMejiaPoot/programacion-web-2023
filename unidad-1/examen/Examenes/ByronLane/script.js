const cart = {};

for (let i = 1; i <= 8; i++) {
    const buttonId = "g" + i;
    const button = document.getElementById(buttonId);

    button.addEventListener("click", function() {
        const itemN = "T" + i;
        const itemName = document.getElementById(itemN);

        const itemP = "P" + i;
        const itemPrice = document.getElementById(itemP);

        if (cart[itemN]) {
            alert("Guitarra seleccionada intenta con otro producto");
        } else {
            cart[itemN] = true;
            alert("Usted agregar al carrito " + itemName.textContent + " con un precio de " + itemPrice.textContent);
        }
    });
}
