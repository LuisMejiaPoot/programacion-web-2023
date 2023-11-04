function getPersonajes() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            const template_personaje = document.querySelector("#template-personaje")
            const contenedor_de_templates = document.createDocumentFragment();

            data.results.forEach(element => {
                const name = element.name
                const image = element.image
                const location_name = element.location.name


                const template = document.importNode(template_personaje.content, true)

                const img = template.querySelector(".image img")
                img.setAttribute("src", image)

                const parrafo = template.querySelector(".name p")
                parrafo.textContent = name

                const location =  template.querySelector(".location-name p")
                location.textContent =  location_name


                contenedor_de_templates.appendChild(template)

            });
            const div_container = document.querySelector("#container")
            div_container.appendChild(contenedor_de_templates)
        })
        .catch((err) => {
            console.log(err)
        })
}

getPersonajes();

function getForm() {
    const user = document.querySelector("#user")
    const password = document.querySelector("#password")


    if (user.value.trim() === "" || password.value.trim() === "") {
        alert("Complete los campos")
        return;
    }

    const data = {
        usuario: user.value,
        contrasenia: password.value
    }
    connectionApi(data)


}


function connectionApi(data) {
    const p = document.querySelector("#message")
    const btn = document.querySelector("#btnlogin")
    btn.style.display = "none"
    p.textContent = "Validando usuario..."
    p.style.color = "black"

    fetch("https://dummyjson.com/auth/login", {
        "method": "POST",
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({
            "username": data.usuario,
            "password": data.contrasenia
        })
    })
        .then(response => response.json())
        .then((e) => {
            console.log(e)

            if (!e?.token) {
                setTimeout(() => {
                    p.style.color = "red"
                    p.textContent = "Usuario o contraseña incorrectos"
                    btn.style.display = "block"
                }, 3000)

            }
            return
            //location.href = "https://www.google.com"
        })
        .catch((err) => {
            console.log(err)
        })

}