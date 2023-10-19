

function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(e => e.json())
        .then((data) => {
            console.log(data);
            maquetado(data);
            buttonAction();
        })
        .catch((error) => console.log(error))
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

fetchData();

