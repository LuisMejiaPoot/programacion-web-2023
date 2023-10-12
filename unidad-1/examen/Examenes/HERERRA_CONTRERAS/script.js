let carrito_precio = 0;
let guitarras_disponibles = [3400,4500,5400,3200,2200,2150,6500,2600];
const guitarras = [3400,4500,5400,3200,2200,2150,6500,2600];

function carrito(num, nom){

    for(let i = 0; i<= guitarras_disponibles.length; i++){

        if(guitarras_disponibles[i] == num){
            alert("Usted añadio guitarra #" + nom + " al carrito, con un valor de " + num);
            carrito_precio += num;
            console.log(carrito_precio);
            guitarras_disponibles.splice(i);
            return;
        }

    }

    alert("Esta guitarra ya estaba en el carrito");
    console.log(carrito_precio);
};


for (let i = 1; i<= guitarras.length; i++){
    let button = document.getElementById(i);
    button.addEventListener('click', () => carrito(guitarras[i-1], i))
}

let bc = document.getElementById("comprar");
bc.addEventListener('click', ()=>{
    alert(" [Carrito vaciado] ")
    carrito_precio = 0;
    guitarras_disponibles = [3400,4500,5400,3200,2200,2150,6500,2600];
}
)
