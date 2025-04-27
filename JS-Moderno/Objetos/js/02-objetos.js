const producto = {
  nombre: "Monitor de 32 Pulgadas",
  precio: 400,
  disponible: false,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);

// Destructuring de objetos anidados
