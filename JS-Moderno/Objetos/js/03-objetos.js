"use strict";

const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
  disponible: true,
};

// Congelar un objeto
Object.freeze(producto);
// Verfica si el objeto está congelado
console.log(Object.isFrozen(producto));

// producto.disponible = false;

/*
Al congelar el objeto ya no es posible modificarlo, arroja el siguiente error:
03-objetos.js:13 Uncaught TypeError: 
Cannot assign to read only property 'disponible' of object '#<Object>'
*/
