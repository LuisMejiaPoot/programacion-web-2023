

const btns = document.querySelectorAll('.btn');
arreglo = []


btns.forEach((btn) => {
    btn.addEventListener('click', (propiedades) => {

        if (arreglo.includes(propiedades.target.id)) {
            alert("Ya esta en el arreglo")
            return
        }
        arreglo.push(propiedades.target.id)
        alert("Agregaste la guitarra");
    });

});