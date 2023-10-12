const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")

var cont1 = 0
var cont2 = 0
var cont3 = 0
var cont4 = 0
var cont5 = 0
var cont6 = 0
var cont7 = 0
var cont8 = 0


btn1.addEventListener("click", ()=> {
    cont1 = cont1 + 1

    if(cont1 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA #1 con un precio de $34.99")
    }
    if(cont1 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})

btn2.addEventListener("click", ()=> {
    cont2 = cont2 + 1

    if(cont2 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA PRO con un precio de $99.99")
    }
    if(cont2 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})

btn3.addEventListener("click", ()=> {
    cont3 = cont3 + 1

    if(cont3 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA MINI con un precio de $25.99")
    }
    if(cont3 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})

btn4.addEventListener("click", ()=> {
    cont4 = cont4 + 1

    if(cont4 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA #4 con un precio de $48.88")
    }
    if(cont4 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})

btn5.addEventListener("click", ()=> {
    cont5 = cont5 + 1

    if(cont5 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA #5 con un precio de $65.33")
    }
    if(cont5 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})

btn6.addEventListener("click", ()=> {
    cont6 = cont6 + 1

    if(cont6 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA #6 con un precio de $52.88")
    }
    if(cont6 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})

btn7.addEventListener("click", ()=> {
    cont7 = cont7 + 1

    if(cont7 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA #7 con un precio de $68.99")
    }
    if(cont7 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})

btn8.addEventListener("click", ()=> {
    cont8 = cont8 + 1

    if(cont8 == 1)
    {
        alert("Usted a agregado al carrito la GUITARRA #8 con un precio de $97.55")
    }
    if(cont8 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

})