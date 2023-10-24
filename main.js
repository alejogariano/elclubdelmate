//Condicionales

//Cuenta

let cuentaAsociado = prompt("¿Ya tienes una cuenta?");

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

let edad = prompt("Ingresar edad");

if (edad >= 18) {
  alert("Puede continuar.");
} else {
  alert("Por favor, consulta con un mayor de edad para poder continuar.");
}


//CICLOS

for (let i = 1; i <= 10; i = i + 1) {
  let ingresarNombre = prompt("Nombre del producto que desea comprar");
  alert(" Producto  N° " + i + " Nombre: " + ingresarNombre);
  if (ingresarNombre == "") { break }
}

let numero = 0;
do {
  numero = prompt("Ingresar Número de Tarjeta");
  console.log(numero);
} while (parseInt(numero));

let entrada = prompt("Ingresar codigo de seguridad");
while (entrada != "912") {
  alert("El usuario ingresó " + entrada);
  entrada = prompt("Codigo incorrecto, intente de nuevo.");
}

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



