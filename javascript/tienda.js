// Carrito: array para almacenar los productos seleccionados
const carrito = [];

document.addEventListener('DOMContentLoaded', function () {
    // Cargar datos desde el archivo JSON
    fetch('../catalogo.json')
        .then(response => response.json())
        .then(data => mostrarProductos(Object.values(data)))
        .catch(error => console.error('Error al cargar datos:', error));

    // Asignar evento al botón "Calcular Costo Total"
    const calcularCostoTotalBtn = document.getElementById('calcular-costo-total');
    if (calcularCostoTotalBtn) {
        calcularCostoTotalBtn.addEventListener('click', calcularCostoTotal);
    }

    // Agregar evento al botón que mostrará/ocultará la lista de carrito
    const mostrarCarritoBtn = document.getElementById('mostrar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');

    mostrarCarritoBtn.addEventListener('click', function () {
        // Alternar la visibilidad de la lista de carrito
        listaCarrito.style.display = (listaCarrito.style.display === 'none' || listaCarrito.style.display === '') ? 'block' : 'none';

        // Agregar un console.log para verificar si se está llamando correctamente
        console.log('Botón clickeado, visibilidad:', listaCarrito.style.display);
    });
});

// Función para mostrar productos en el DOM
function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos-container');

    // Iterar sobre los productos y mostrarlos en el contenedor
    productos.forEach(producto => {
        // Crear elementos para mostrar detalles del producto
        const detallesElement = document.createElement('div');
        detallesElement.classList.add('detalles');
        detallesElement.innerHTML = `
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <p>Precio: ${producto.precio}</p>
            <p>${producto.descripcion}</p>
        `;

        // Crear botón "Agregar al carrito"
        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.addEventListener('click', () => {
            // Agregar el producto al carrito
            carrito.push(producto);
            console.log(`Producto "${producto.nombre}" agregado al carrito`);
            mostrarCarrito();
        });
        detallesElement.appendChild(botonAgregar);

        // Agregar detalles al contenedor de productos
        productosContainer.appendChild(detallesElement);
    });
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    const listaCarrito = document.getElementById('lista-carrito');

    // Limpiar el contenido del carrito
    carritoContainer.innerHTML = '';

    // Agregar productos al carrito
    carrito.forEach(producto => {
        const carritoElement = document.createElement('div');
        carritoElement.classList.add('producto-en-carrito');
        carritoElement.innerHTML = `
            <p>${producto.nombre} - Precio: ${producto.precio}</p>
        `;
        carritoContainer.appendChild(carritoElement);
    });

    // Mostrar la lista de carrito
    listaCarrito.style.display = 'block';

    // SweetAlert
    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: 'El producto ha sido agregado al carrito con éxito.'
    });
}

// Función para calcular el costo total y mostrar el carrito
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

    // Costo total 
    const costoTotalFormateado = costoTotal.toFixed(0);

    costoTotalElement.innerText = `El costo total de los productos en el carrito es: $${costoTotalFormateado}`;
}
