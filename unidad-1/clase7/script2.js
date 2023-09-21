
/* const button = document.querySelector("#btn-saludar") */
/* const button  =  document.getElementById("btn-saludar")

button.addEventListener("click", () => {
    console.log("Hola mundo")
})

function saludar() {
    alert("Hola mundo")
}
button.addEventListener("click", saludar)
 */

const buttons  = document.querySelectorAll(".btn")
const inputNombre =  document.querySelector("#nombre")
const inputApellido =  document.querySelector("#apellido")

const setName   =  document.querySelector("#setName")


buttons.forEach((button)=>{
   button.addEventListener("click",()=>{
         console.log("Presionando "+button.textContent)
         console.log("Nombre: "+inputNombre.value)
         console.log("Apellido "+ inputApellido.value)

         setName.innerHTML +=  "<p>"+inputNombre.value + " "+  inputApellido.value+"</p>"
   })
})


