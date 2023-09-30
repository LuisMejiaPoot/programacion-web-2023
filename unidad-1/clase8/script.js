

const input = document.querySelector("#buscador")

input.addEventListener("keydown", (evento) => {
    let valor = evento.target.value
    if (evento.key == "Enter") {
        /* alert("Buscando: " + valor) */
        alert(`La buscaqueda de ${valor}  no arrojo resultados`)
    }
})

var contador = 1;
function saludar() {

    if (input.value.length < 4) {
        alert("El texto es muy corto")
        return;
    }
    const estilos = {
        border: "1px red solid",
        "border-radius": "5px",
    }


    const contenedor = document.querySelector("#contenedor");
    let valor = input.value;
    const p = document.createElement("p");
    const img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/200/300")

    img.style.border = "1px red solid"
    img.style.height = "50px"
    img.style.width = "50px"
    console.log(img.style)
    p.setAttribute("id", `parrafo-${contador}`);

    p.classList.add("ps")
    p.textContent = valor;



    const div =  document.createElement("div");
    div.appendChild(img)
    div.appendChild(p)

    contenedor.appendChild(div);

    input.value = "";
    contador++;

}

