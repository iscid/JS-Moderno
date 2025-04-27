"use strict";

const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
  disponible: true,
};

// Sellar un objeto
Object.seal(producto);
// Verfica si el objeto está sellado
console.log(Object.isSealed(producto));

// Al sellar el objeto si es posible modificarlo
producto.disponible = false;
console.log(producto);

// delete producto.precio;
// producto.imagen = "imagen.jpg";

/*
Tanto en freeze como en seal no es posible agregar o eliminar propiedades del objeto, arroja el siguiente error:
04-objetos.js:18 Uncaught TypeError: Cannot delete property 'precio' of #<Object>
04-objetos.js:19 Uncaught TypeError: Cannot add property imagen, object is not extensible
*/
