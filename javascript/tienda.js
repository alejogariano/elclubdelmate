document.addEventListener('DOMContentLoaded', function () {
    // Cargar datos desde el archivo JSON
    fetch('../catalogo.json')
      .then(response => response.json())
      .then(data => mostrarProductos(Object.values(data)))
      .catch(error => console.error('Error al cargar datos:', error));
  
    // Función para mostrar productos en el DOM
    function mostrarProductos(productos) {
      const productosContainer = document.getElementById('productos-container');
  
      // Iterar sobre los productos y mostrarlos en el contenedor
      productos.forEach(producto => {
        // Crear elemento contenedor para cada producto
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
  
        // Crear elemento imagen y asignar la URL de la imagen desde el producto
        const imagenElement = document.createElement('img');
        imagenElement.src = producto.imagen; // Asegúrate de tener la propiedad "imagen" en tus datos JSON
        imagenElement.alt = producto.nombre; // Agrega un texto alternativo para accesibilidad
        productoElement.appendChild(imagenElement);
  
        // Crear elementos para mostrar detalles del producto
        const detallesElement = document.createElement('div');
        detallesElement.classList.add('detalles');
        detallesElement.innerHTML = `
          <h2>${producto.nombre}</h2>
          <p>Precio: ${producto.precio}</p>
          <p>${producto.descripcion}</p>
        `;
        productoElement.appendChild(detallesElement);
  
        // Crear botón "Agregar al carrito"
        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.addEventListener('click', () => {
          // Puedes implementar aquí la lógica para agregar el producto al carrito
          console.log(`Producto "${producto.nombre}" agregado al carrito`);
        });
        detallesElement.appendChild(botonAgregar);
  
        // Agregar el producto al contenedor principal
        productosContainer.appendChild(productoElement);
      });
    }
  });

  function calcularCostoTotal() {
    const cantidadDeProductos = parseInt(document.getElementById("cantidad-productos").value);
  
    let costoTotal = 0;
    const mensajeUsuario = document.getElementById("mensaje-usuario");
  
    // Limpiar mensajes anteriores
    mensajeUsuario.innerText = "";
  
    for (let i = 1; i <= cantidadDeProductos; i= i + 1) {
      const precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i}`));
  
      if (!isNaN(precioProducto) && precioProducto > 0) {
        costoTotal += precioProducto;
      } else {
        mensajeUsuario.innerText = "El precio ingresado es inválido. Inténtelo nuevamente.";
        return;
      }
    }
  
    const costoTotalElement = document.getElementById("costo-total");
    costoTotalElement.innerText = `El costo total de los productos es: $${costoTotal.toFixed(2)}`;
  }
  
  
  