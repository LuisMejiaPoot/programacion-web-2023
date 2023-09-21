var numero = 10; // Variable global
let numero2 = 20; // Variable local
const numero3 = 30; // Variable constante

/* console.table(alumnos);
console.error("Esto es un error");
console.info("Esto es un mensaje informativo");
console.warn("Esto es un error"); 
const fechaRegistro = new Date();*/
//tipos de variables
//let nombre = "Juan";
let isCasado =  true;
//let edad = 30;
let sueldo = 950.20;
let hijos = null;

const alumnos = ["Juan", "Pedro", "Maria", "Diana", "Eduardo"];
const [X,Y,Z,XZ,M] = alumnos;



const alumno = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    casado: false,
}
const {nombre , apellido, edad , casado }  = alumno;  


if( edad  > 10){
    console.log("Es mayor a 10");
}else{
    console.log("Es menor a 10");
}

  switch (nombre) {
    case "Juan":
        console.log("Hola Juan");
        break;
    case "Pedro":
        console.log("Hola Pedro");
    default:
        console.log("Hola desconocido");
        break;
  }

// Ciclos

console.log("For");
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}

console.log("While");
let j = 0;
while(j < alumnos.length){
    console.log(alumnos[j]);
    j++;
}

console.log("For in");
for (const ii in alumnos) {
    console.log(alumnos[ii]);
}

console.log("For each")
alumnos.forEach( (item, index) => console.log(item,index)  )


console.log("For of");
for (const alumno of alumnos) {
    console.log(alumno);
}

console.log("for in con objeto");
for (const key in alumno) {
    console.log(alumno["apellido"]);
}


// Funciones

function saludar() {
    console.log("Hola mundo");
}
const sumar = (num, num2) => {
    const resultado = num + num2;
    console.log("El resultado de la suma es " + resultado)
    return resultado;
}

// Llamado de funciones
/* saludar();
sumar(10, 20);
console.log(sumar(100, 200)) */