//Condicionales

// Verificar si el usuario ha iniciado sesión
let usuarioIniciadoSesion = true; 

if (usuarioIniciadoSesion) {
  console.log("¡Bienvenido a nuestra tienda de mates! Disfruta de nuestras ofertas especiales.");
} else {
  console.log("Por favor, inicia sesión para acceder a todas nuestras ofertas y productos.");
}

//Verificar edad del comprador

let edad  = prompt("Ingresar edad"); 

if (edad >= 18) {
  alert ("Podes continuar con la compra.");
} else {
  alert ("Por favor, consulta con un mayor de edad para poder continuar.");
}

//Metodo de pago

let metodoPago   = prompt("¿Con que metodo va a abonar?");

if((metodoPago !="") && ((metodoPago == "EFECTIVO") || (metodoPago =="efectivo"))){
    alert("No aceptamos Efectivo."); 
}else{
    alert("Continuar con el pago.");
}



