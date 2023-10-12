var G1 = document.getElementById("G1");
var G2 = document.getElementById("G2");
var G3 = document.getElementById("G3");
var G4 = document.getElementById("G4");
var G5 = document.getElementById("G5");
var G6 = document.getElementById("G6");
var G7 = document.getElementById("G7");
var G8 = document.getElementById("G8");

var PickedG1 = 0
var PickedG2 = 0
var PickedG3 = 0
var PickedG4 = 0
var PickedG5 = 0
var PickedG6 = 0
var PickedG7 = 0
var PickedG8 = 0

G1.addEventListener("click", function() {
    PickedG1 = PickedG1 + 1
    
    if(PickedG1 ==1)
    {
        alert("Usted a agregado al carrito la Guitarra #1 con un precio de $4,400")
    }
    else if(PickedG1 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

});

G2.addEventListener("click", function() {
    PickedG2 = PickedG2 + 1
    
    if(PickedG2 ==1)
    {
        alert("Usted a agregado al carrito la Guitarra #2 con un precio de $5,840")
    }
    else if(PickedG2 >= 2)
    {
        alert("Guitarra seleccionada intenta otro producto")
    }

});

var G3 = document.getElementById("G3");
G3.addEventListener("click", function() {
    PickedG3 = PickedG3 + 1;
    
    if (PickedG3 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #3 con un precio de $5,400");
    } else if (PickedG3 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var G4 = document.getElementById("G4");
G4.addEventListener("click", function() {
    PickedG4 = PickedG4 + 1;
    
    if (PickedG4 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #4 con un precio de $10,400");
    } else if (PickedG4 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var G5 = document.getElementById("G5");
G5.addEventListener("click", function() {
    PickedG5 = PickedG5 + 1;
    
    if (PickedG5 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #5 con un precio de $9,400");
    } else if (PickedG5 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var G6 = document.getElementById("G6");
G6.addEventListener("click", function() {
    PickedG6 = PickedG6 + 1;
    
    if (PickedG6 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #6 con un precio de $8,400");
    } else if (PickedG6 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var G7 = document.getElementById("G7");
G7.addEventListener("click", function() {
    PickedG7 = PickedG7 + 1;
    
    if (PickedG7 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #7 con un precio de $6,450");
    } else if (PickedG7 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});

var G8 = document.getElementById("G8");
G8.addEventListener("click", function() {
    PickedG8 = PickedG8 + 1;
    
    if (PickedG8 === 1) {
        alert("Usted ha agregado al carrito la Guitarra #8 con un precio de $5,230");
    } else if (PickedG8 >= 2) {
        alert("Guitarra seleccionada, intenta otro producto.");
    }
});