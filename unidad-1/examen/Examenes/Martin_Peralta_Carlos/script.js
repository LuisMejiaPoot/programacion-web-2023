const btn1 = document.querySelector("#btn-carrito1")
const btn2 = document.querySelector("#btn-carrito2")
const btn3 = document.querySelector("#btn-carrito3")
const btn4 = document.querySelector("#btn-carrito4")
const btn5 = document.querySelector("#btn-carrito5")
const btn6 = document.querySelector("#btn-carrito6")
const btn7 = document.querySelector("#btn-carrito7")
const btn8 = document.querySelector("#btn-carrito8")
var contador1 = 0
var contador2 = 0
var contador3 = 0
var contador4 = 0
var contador5 = 0
var contador6 = 0
var contador7 = 0
var contador8 = 0


btn1.addEventListener("click", () =>{
    contador1 = contador1+1
    console.log("Contador 1: " +contador1)
    if(contador1 == 1){
        alert(`Usted agregó al carrito "Guitarra #1" con un precio de $3400`)
    }

    if(contador1 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})

btn2.addEventListener("click", () =>{
    contador2 = contador2+1
    console.log("Contador 2: " +contador2)
    if(contador2 == 1){
        alert(`Usted agregó al carrito "Guitarra #2" con un precio de $4500`)
    }

    if(contador2 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})

btn3.addEventListener("click", () =>{
    contador3 = contador3+1
    console.log("Contador 3: " +contador3)
    if(contador3 == 1){
        alert(`Usted agregó al carrito "Guitarra #3" con un precio de $5032`)
    }

    if(contador3 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})

btn4.addEventListener("click", () =>{
    contador4 = contador4+1
    console.log("Contador 4: " +contador4)
    if(contador4 == 1){
        alert(`Usted agregó al carrito "Guitarra #4" con un precio de $10000`)
    }

    if(contador4 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})

btn5.addEventListener("click", () =>{
    contador5 = contador5+1
    console.log("Contador 5: " +contador5)
    if(contador5 == 1){
        alert(`Usted agregó al carrito "Guitarra #5" con un precio de $4009`)
    }

    if(contador5 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})

btn6.addEventListener("click", () =>{
    contador6 = contador6+1
    console.log("Contador 6: " +contador6)
    if(contador6 == 1){
        alert(`Usted agregó al carrito "Guitarra #6" con un precio de $6001`)
    }

    if(contador6 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})

btn7.addEventListener("click", () =>{
    contador7 = contador7+1
    console.log("Contador 7: " +contador7)
    if(contador7 == 1){
        alert(`Usted agregó al carrito "Guitarra #7" con un precio de $2399`)
    }

    if(contador7 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})

btn8.addEventListener("click", () =>{
    contador8 = contador8+1
    console.log("Contador 8: " +contador8)
    if(contador8 == 1){
        alert(`Usted agregó al carrito "Guitarra #8" con un precio de $6999`)
    }

    if(contador8 > 1){
        alert("Guitarra seleccionada intenta otro producto")
    }
})