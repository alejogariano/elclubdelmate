//Eventos, uso de HTML en la pagina Cuenta.html

let asociarse = document.getElementById("asociacion");

asociarse.addEventListener("submit", validarAsociacion);

function validarAsociacion(e) {
  e.preventDefault();
  console.log("Asociacion exitosa");
}


let botonAsociarse = document.getElementById('botonAsociarse');

botonAsociarse.addEventListener('click', function () {
  
  alert('¡Bienvenido al Club!');
});
