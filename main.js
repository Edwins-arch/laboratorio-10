console.log("Hola mundo");

let nombre = "Edwin";
let edad = 19;
let Es_estudiante = "si";

let nombre1 = document.createElement("h1");
let edadh1 = document.createElement("h1");
let estudianteh1 = document.createElement("h1");

console.log("nombre:",nombre);
console.log("edad:",edad);
console.log("Es_estudiante?",Es_estudiante);
//imprimir en la pagina web

document.write("nombe: ",nombre);
document.write("edad:",edad);
document.write("Es_estudiante?",Es_estudiante);

nombre1.textContent = "nombre: " + nombre;
edadh1.textContent = "edad: "+ edad;
estudianteh1.textContent = "Es estudiante? "+ Es_estudiante;

document.body.appendChild(nombre1);
document.body.appendChild(edadh1);
document.body.appendChild(estudianteh1);
