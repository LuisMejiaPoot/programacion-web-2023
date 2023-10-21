const queryString = window.location.search;

// Create a URLSearchParams object to parse the query string
const params = new URLSearchParams(queryString);

// Get the values of specific parameters
const product_id = params.get("id"); // "value1"
const tienda = params.get("tienda"); // "value2"



function getProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(e => e.json())
        .then(response => {
            console.log(response)

            const {title  , id  , price , image, description} = response;
            const image_html  =  document.querySelector(".image img") 
            image_html.setAttribute("src" , image)
            
            const titulo =  document.querySelector(".info h1")
            titulo.textContent = title

            const description_html  =  document.querySelector(".info .description")
            description_html.textContent = description
        })
}
getProduct(product_id)