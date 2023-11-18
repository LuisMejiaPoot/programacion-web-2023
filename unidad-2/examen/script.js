async function getCategories() {
    console.log("getCategories");
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    createCategories(data);
    return data;
}

function createCategories(categories) {
    const template_categories = document.querySelector("#template-categories");
    const container_categories = document.querySelector(".categories ul");
    container_categories.style.color = "white";
    container_categories.style.textAlign = "center";
    container_categories.innerHTML = "Obteniendo categorias...";
    const fragment = document.createDocumentFragment();

    categories.forEach(category => {
        const template = document.importNode(template_categories.content, true)
        const title = template.querySelector(".category > a");
        title.textContent = category.toUpperCase();
        fragment.appendChild(template);
    });

    container_categories.innerHTML = "";
    container_categories.appendChild(fragment);
}
getCategories()