

function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(e => e.json())
        .then((data) => {
            //maquetado(data);
            //maquetadoString(data);
            maquetadoTemplate(data);
            buttonGetProduct();
        })
        .catch((error) => console.log(error))
}


function maquetadoTemplate(data) {
    const container = document.querySelector("#container")
    const template_ = document.querySelector("#template");

    const fragment = document.createDocumentFragment();
    data.forEach(element => {
        const { title, image, id } = element
        const template = document.importNode(template_.content, true)

        const p = template.querySelector("p");
        p.textContent = title;
        const img = template.querySelector("img");
        img.setAttribute("src", image);

        const div_button = template.querySelector(".container-button")
        const button = template.querySelector(".button")
        button.setAttribute("id", id);

        const button_danger = template.querySelector(".danger")
        button_danger.setAttribute("id", id);
        button_danger.setAttribute("onClick", `deleteProduct(${id})`)

        const div = template.querySelector("div")
        div.setAttribute("id", `product-${id}`);


        fragment.appendChild(template)
    });
    container.appendChild(fragment)

}
function deleteProduct(id) {
    const container =  document.querySelector("#container")
    const product = document.querySelector(`#product-${id}`)
    container.removeChild(product)
    alert(id)
}
function maquetadoString(data) {
    const container = document.querySelector("#container")
    let html = ""
    data.forEach(element => {
        const { title, image, id } = element;
        html += `
         <div id="product-${id}">
            <img src="${image}">
            <p>${title}</p>
            <div class='container-button'>
                <button id=${id} class='button'>Agregar</button>
            </div>
         </div>
        `
    });
    container.innerHTML = html;
}
function maquetado(data) {
    const div = document.querySelector("#container")
    data.forEach(element => {
        const { category,
            description,
            id,
            image,
            price,
            title,
            rating: { count, rate } } = element;

        const product = document.createElement("div");
        product.setAttribute("id", `product-${id}`);
        const p_title = document.createElement("p");
        p_title.textContent = title;

        const image_ = document.createElement("img");
        image_.src = image;


        div_button = document.createElement("div");
        div_button.classList.add("container-button");

        const button = document.createElement("button");
        button.setAttribute("id", id);
        button.textContent = "Agregar";
        button.classList.add("button");
        div_button.appendChild(button);



        product.appendChild(image_);
        product.appendChild(p_title);
        product.appendChild(div_button);
        div.appendChild(product);
    });
}

function buttonAction() {
    const carrito = [];
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((btnt) => {
        btnt.addEventListener("click", () => {
            // primera vez y no existe el carrito en el localstorage
            if (localStorage.getItem("carrito") == null) {
                carrito.push(btnt.id);
                localStorage.setItem("carrito", JSON.stringify(carrito))
                alert("Producto agregado al carrito")
                return;
            }
            // ya existe el carrito en el localstorage
            const carrito_productos = JSON.parse(localStorage.getItem("carrito"))
            const find = carrito_productos.find(element => element == btnt.id)
            if (find > 0) {
                alert("El producto ya existe")
                return;
            }
            carrito_productos.push(btnt.id);
            localStorage.setItem("carrito", JSON.stringify(carrito_productos))
            //localStorage.setItem(`product-${btnt.id}`, btnt.id)
            alert("Producto agregado al carrito")
        })
    })
}

function getProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(e => e.json())
        .then(response => {
            console.log(response)
        })
}


function buttonGetProduct() {
    const carrito = [];
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((btnt) => {
        btnt.addEventListener("click", () => {
            location.href = "product.html?id=" + btnt.id + "&tienda=modelo"
            //getProduct(btnt.id)
            // primera vez y no existe el carrito en el localstorage

        })
    })
}

fetchData();

