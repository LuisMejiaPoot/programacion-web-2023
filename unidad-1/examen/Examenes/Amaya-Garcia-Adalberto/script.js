
/*
let guitarrras = []


guitarrras = document.querySelectorAll(".guitar");


for(let i of guitarrras)
{
    console.log(i.textContent);
}
*/

// EL CODIGO NO ES OPTIMO 
// SE PUEDE MEJORAR CON UNA FUNCION QUE RECIBA COMO PARAMETRO EL ID DE LA GUITARRA
// Y QUE SE EJECUTE CUANDO SE HAGA CLICK EN EL BOTON
let btn = document.getElementsByClassName("btn");
let guitarraComprada = 0;
for (let x of btn)
{
    x.addEventListener("click", agregandoCarrito)
}

function agregandoCarrito()
{
    switch(this.id)
    {
        case "1":
            if(guitarraComprada == 1)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 1 con un precio $4250")
            guitarraComprada = 1;
            
            break;
        case "2":
            if(guitarraComprada == 2)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 2 con un precio $5500")
            guitarraComprada = 2;
            break;
        case "3":
            if(guitarraComprada == 3)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 3 con un precio $4500")
            guitarraComprada = 3;
            break;
        case "4":
            if(guitarraComprada == 4)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 4 con un precio $5000")
            guitarraComprada = 4;
            break;
        case "5":
            if(guitarraComprada == 5)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 5 con un precio $1000")
            guitarraComprada = 5;
            break;
        case "6":
            if(guitarraComprada == 6)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 6 con un precio $2000")
            guitarraComprada = 6;
            break;
        case "7":
            if(guitarraComprada == 7)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 7 con un precio $4000")
            guitarraComprada = 7;
            break;
        case "8":
            if(guitarraComprada == 8)
            {
                alert("Guitarra seleccionada intenta con otro producto")
                break;
            }
            alert("Usted agregar al carrito Guitarra 8 con un precio $5002")
            guitarraComprada = 8;
            break;
    }
}