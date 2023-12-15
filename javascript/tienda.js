// Carrito

const carrito = [];

document.addEventListener('DOMContentLoaded', function () {
    
    fetch('../catalogo.json')
        .then(response => response.json())
        .then(data => mostrarProductos(Object.values(data)))
        .catch(error => console.error('Error al cargar datos:', error));

    const calcularCostoTotalBtn = document.getElementById('calcular-costo-total');
    if (calcularCostoTotalBtn) {
        calcularCostoTotalBtn.addEventListener('click', calcularCostoTotal);
    }


    const mostrarCarritoBtn = document.getElementById('mostrar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');

    mostrarCarritoBtn.addEventListener('click', function () {
        
        listaCarrito.style.display = (listaCarrito.style.display === 'none' || listaCarrito.style.display === '') ? 'block' : 'none';

        console.log('Botón clickeado, visibilidad:', listaCarrito.style.display);
    });
});

// funcion para mostrar productos en el DOM
function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos-container');


    productos.forEach(producto => {

        const detallesElement = document.createElement('div');
        detallesElement.classList.add('detalles');

        detallesElement.innerHTML = `
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <p class="material">${producto.material}</p>
            <p class="precio">${producto.precio}</p>
            <p class="descripcion">${producto.descripcion}</p>
            <p class="capacidad">${producto.capacidad}</p>
            <p class="extraDetalles">${producto.detalles}</p>
        `;

        const caracteristicasElement = document.createElement('div');
        caracteristicasElement.classList.add('caracteristicas');
        producto.caracteristicas.forEach(oracion => {
            const parrafo = document.createElement('p');
            parrafo.textContent = oracion;
            caracteristicasElement.appendChild(parrafo);
        });

        // boton agregar al carrito
        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.addEventListener('click', () => {

            carrito.push(producto);
            console.log(`Producto "${producto.nombre}" agregado al carrito`);
            mostrarCarrito();
        });

        detallesElement.appendChild(caracteristicasElement);

        detallesElement.appendChild(botonAgregar);

        productosContainer.appendChild(detallesElement);
    });
}

// funcion para mostrar el contenido del carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    const listaCarrito = document.getElementById('lista-carrito');

    carritoContainer.innerHTML = '';

    carrito.forEach(producto => {
        const carritoElement = document.createElement('div');
        carritoElement.classList.add('producto-en-carrito');
        carritoElement.innerHTML = `
            <p>${producto.nombre} - Precio: ${producto.precio}</p>
        `;
        carritoContainer.appendChild(carritoElement);
    });

    listaCarrito.style.display = 'block';

    // SweetAlert
    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: 'El producto ha sido agregado al carrito con éxito.'
    });
}

// funcion para calcular el costo total y mostrar el carrito
function calcularCostoTotal() {
    const mensajeUsuario = document.getElementById("mensaje-usuario");
    const costoTotalElement = document.getElementById("costo-total");

    if (!mensajeUsuario || !costoTotalElement) {
        console.error('Elemento con ID "mensaje-usuario" o "costo-total" no encontrado en el DOM.');
        return;
    }

    let costoTotal = 0;

    carrito.forEach(producto => {
        const precioNumerico = parseFloat(producto.precio.replace(/[^0-9.]/g, ''));

        if (!isNaN(precioNumerico)) {
            costoTotal += precioNumerico;
        } else {
            console.error(`El precio de "${producto.nombre}" no es un número válido. Tipo: ${typeof producto.precio}, Valor: ${producto.precio}`);
        }
    });

    const costoTotalFormateado = costoTotal.toFixed(0);

    costoTotalElement.innerText = `El costo total de los productos en el carrito es: $${costoTotalFormateado}`;
}
