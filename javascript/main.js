

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
