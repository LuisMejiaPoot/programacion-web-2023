var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");
var boton6 = document.getElementById("boton6");
var boton7 = document.getElementById("boton7");
var boton8 = document.getElementById("boton8");

var valor1 = 0
var valor2 = 0
var valor3 = 0
var valor4 = 0
var valor5 = 0
var valor6 = 0
var valor7 = 0
var valor8 = 0

boton1.addEventListener("click", function() {
    valor1 = valor1 + 1
    
    if(valor1 ==1)
    {
        alert("Usted a agregado al carrito la Guitarra #1 con un precio de 3400$")
    }
    else if(valor1 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

});

boton2.addEventListener("click", function() {
    valor2 = valor2 + 1
    
    if(valor2 ==1)
    {
        alert("Usted a agregado al carrito la Guitarra #2 con un precio de 4000$")
    }
    else if(valor2 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

});

var boton3 = document.getElementById("boton3");
boton3.addEventListener("click", function() {
    valor3 = valor3 + 1;
    
    if (valor3 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #3 con un precio de 5000$");
    } else if (valor3 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var boton4 = document.getElementById("boton4");
boton4.addEventListener("click", function() {
    valor4 = valor4 + 1;
    
    if (valor4 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #4 con un precio de 6000$");
    } else if (valor4 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var boton5 = document.getElementById("boton5");
boton5.addEventListener("click", function() {
    valor5 = valor5 + 1;
    
    if (valor5 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #5 con un precio de 7000$");
    } else if (valor5 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var boton6 = document.getElementById("boton6");
boton6.addEventListener("click", function() {
    valor6 = valor6 + 1;
    
    if (valor6 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #6 con un precio de 8000$");
    } else if (valor6 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var boton7 = document.getElementById("boton7");
boton7.addEventListener("click", function() {
    valor7 = valor7 + 1;
    
    if (valor7 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #7 con un precio de 9000$");
    } else if (valor7 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var boton8 = document.getElementById("boton8");
boton8.addEventListener("click", function() {
    valor8 = valor8 + 1;
    
    if (valor8 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #8 con un precio de 10000$");
    } else if (valor8 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});






