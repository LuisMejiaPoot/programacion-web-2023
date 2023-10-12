
const materias = {
    matematicas: {
        nombre1: "Matematicas",
        nota: 0,
        examen: "100%",
        tareas: [1, 2, 3, 4, 5]
    },
    fisica: {
        nombre: "Fisica",
        nota: 0,
        tareas: [1, 2, 3, 4, 5],
        examen: "100%"
    }
}
const isValido = materias.fisica.tareas.length > 0 ? "si es valid" : "no es valido";
const matematicas_nombre = materias?.matematicas?.nombre ?? "No existe"
console.log("🚀 ~ file: script.js:18 ~ matematicas_nombre:", matematicas_nombre)
const { matematicas, fisica, calculo } = materias

const { nombre, nota, examen, tareas } = matematicas

console.log(matematicas, fisica, calculo)

console.log(materias.fisica.tareas[0])

/* 
console.log(materias["fisica"])
console.log(materias.fisica) */



const data = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25
    },
    {
        nombre: "Manuel",
        apellido: "Gomez",
        edad: 25
    }
];
const myjson = JSON.stringify(data); // crear json a partir de un objeto
console.log(myjson)

const myobject = JSON.parse(myjson); // crear objeto a partir de un json
console.log(myobject)




/* fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        setData(data)

    })



function setData(data) {
    const div =  document.querySelector("#content") 
    data.forEach(element => {
        const p =  document.createElement("p")
        p.textContent = element.title
        div.appendChild(p)
    });
} */


/* const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    
        reject('Se ejecuto con error')
    }, 2000)
}) */

/* mypromise.then((response) => {
    console.log(response)

}).catch((error) => {
    console.log("ESTE ES EL ERROR " + error)
}).finally(() => {
    console.log("Se ejecuto el finally")
})
console.log("Hola mundo") */

/* 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            reject('Se ejecuto con error')
        }, 2000)
    });
}

async function fetchDataAsync() {
    try {
        const response = await fetchData()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log("Se ejecuto el finally")
    }

}

fetchDataAsync() */