const searchInput = document.querySelector("input[type='search']")

searchInput.addEventListener("keyup", () => {

    getProduct(searchInput.value)
})


function getProduct(inputvalue) {
    fetch(`https://dummyjson.com/products/search?q=${inputvalue}&limit=100`)
        .then(response => response.json())
        .then((response) => {
            createLayout(response)
        })
}


function createLayout(data) {
    const { products } = data
    const template_product = document.querySelector("#template-product")
    const contenedor_template = document.createDocumentFragment();

    products.forEach(item => {
        const template = document.importNode(template_product.content, true)

        const title = template.querySelector(".title")
        title.textContent = item.title

        const image = template.querySelector(".image img")
        image.setAttribute("src", item.images[0])

        const description = template.querySelector(".footer .name")
        description.textContent = item.description

        const price = template.querySelector(".footer .price")
        price.textContent = `Precio: ${item.price}`


        contenedor_template.appendChild(template)
    });

    const container = document.querySelector(".container")
    container.innerHTML = ""
    container.appendChild(contenedor_template)
}
//const buscador = document.querySelector("#buscador")












/* const searchInput = document.querySelector("input[type='search']");

searchInput.addEventListener("keyup", () => {
    getProducts(searchInput.value);
})


function getProducts(busqueda) {
    fetch(`https://dummyjson.com/products/search?q=${busqueda}&limit=100`)
        .then(response => response.json())
        .then(data => {
            createLayout(data);
        })
        .catch(error => console.log(error));
}

function createLayout(data) {
    console.log("🚀 ~ file: script.js:11 ~ createLayout ~ data:", data)

}
 */


