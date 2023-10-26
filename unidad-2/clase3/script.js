const button = document.querySelector(".container-button button")
button.addEventListener("click", saveProduct)

function saveProduct() {
    const title = document.querySelector("#title").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value
    const image = document.querySelector("#image").value
    const category = document.querySelector("#category").value

    const product = {
        title,
        price: price,
        description: description,
        image: image,
        category: category
    }
    console.log("🚀 ~ file: script.js:18 ~ saveProduct ~ product:", product)
    const setting = {
        method: "POST",
        body: JSON.stringify(product)
    }

    fetch("https://fakestoreapi.com/products", setting)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })

}