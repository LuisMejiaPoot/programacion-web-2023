function getCharacters(params) {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {


            createLayout(data)
        })
        .catch(error => console.log(error))
}


function createLayout(data) {
    const { results } = data
    const layout = document.querySelector("#template-layout")
    const contenedor_de_templates = document.createDocumentFragment();
    const deletedLocalStorage = { ...localStorage }
    results.forEach((element, index) => {

        if (deletedLocalStorage?.[`card-${element.id}`]) {
            return
        }

        const template = document.importNode(layout.content, true)
        const img = template.querySelector(".image img")
        img.setAttribute("src", element.image)

        const item_name = template.querySelector(".item-name")
        const h2 = template.querySelector("h2")
        h2.textContent = element.name

        const footer = template.querySelector(".item-footer")
        footer.setAttribute("id", "footer-" + element.id)

        const button_success = template.querySelector(".item-footer div .btn-success")
        button_success.setAttribute("onClick", `saludar(${element.id})`)

        const button_danger = template.querySelector(".item-footer div .btn-danger")
        button_danger.setAttribute("onClick", `borrar(${element.id})`)


        const card = template.querySelector(".item")
        card.setAttribute("id", `card-${element.id}`)

        contenedor_de_templates.appendChild(template)



    });

    const container = document.querySelector(".container")
    container.appendChild(contenedor_de_templates)
}


function saludar(id) {
    alert("hola" + id)
}

function borrar(id) {
    const container = document.querySelector(".container")
    const cardSelected = document.querySelector(`#card-${id}`)
    const name = cardSelected.querySelector(".item-content h2")

    if (confirm(`¿Estas seguro que deseas eliminar ${name.textContent}`)) {
        container.removeChild(cardSelected)
        saveLocalStorage(id)
    }

}

function saveLocalStorage(id) {
    localStorage.setItem(`card-${id}`, id)
}

getCharacters()