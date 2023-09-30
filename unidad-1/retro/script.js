
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    const nombre =  document.querySelector("#nombre")
    const correo =  document.querySelector("#correo")

    
    if(nombre.value == "" || correo.value == ""){
        alert("Debe ingresar todos los campos")
        nombre.classList.add("danger")
        correo.classList.add("danger")
        nombre.value = ""
        correo.value = ""
        return ;
    }

    alert(`Bienvenido ${nombre.value} a nuestro sitio web`)

})