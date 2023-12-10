

for (let mate of mates) {
  console.log(mate)
}

//Storage y JSON


const matesJSON = JSON.stringify(mates);

localStorage.setItem("Mates", matesJSON);

const datosAlmacenados = localStorage.getItem("Mates");

const matesAlmacenados = JSON.parse(datosAlmacenados);

console.log(matesAlmacenados);

for (const mate of matesAlmacenados) {

  console.log(`Nombre: ${mate.nombre}`);

  console.log(`Precio: ${mate.precio}`);
}








//Cuenta

/*let cuentaAsociado = prompt("¿Ya tienes una cuenta?");

if ((cuentaAsociado != "") && ((cuentaAsociado == "NO") || (cuentaAsociado == "no"))) {
  alert("Registrate.");
} else {
  alert("Inicia Sesion.");
}


// Verificar si el usuario ha iniciado sesión
let usuarioIniciadoSesion = true;

if (usuarioIniciadoSesion) {
  console.log("¡Bienvenido a nuestra tienda de mates! Disfruta de nuestras ofertas especiales.");
} else {
  console.log("Por favor, inicia sesión para acceder a todas nuestras ofertas y productos.");
}

//Verificar edad del comprador

let edad = parseInt(prompt("Ingresar edad"));

if (edad >= 18) {
  alert("Puede continuar.");
} else {
  alert("Por favor, consulta con un mayor de edad para poder continuar.");
}

//Metodo de pago

let metodoPago = prompt("Puede abonar con efectivo, mercado pago, tarjeta de debito o tarjeta de credito.")
switch (metodoPago) {
  case "efectivo":
    console.log("Pagaste con efectivo.")
    break;
  case "mercado pago":
    console.log("Pagaste con Mercado Pago.")
    break;
  case "tarjeta de debito":
    console.log("Pagaste con tarjeta de debito.")
    break;
  case "tarjeta de credito":
    console.log("Pagaste con tarjeta de credito.")
    break;
  default:
    console.log("No se acepta el metodo de pago.")
    break;
}

let numero = 0;
do {
  numero = parseFloat(prompt("Ingresar Número de Tarjeta"));
  console.log(numero);
} while (numero <= 0);

let entrada = parseFloat(prompt("Ingresar codigo de seguridad"));
while (entrada != "912") {
  alert("El usuario ingresó " + entrada);
  entrada = parseFloat(prompt("Codigo incorrecto, intente de nuevo."));
}*/

