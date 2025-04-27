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
// const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

const { nombre, precio, disponible, informacion } = producto;
const { medidas, fabricacion } = informacion;
const { peso, medida } = medidas;
const { pais } = fabricacion;

console.log(informacion);
console.log(`Peso: ${peso} - Medida: ${medida}`);
console.log(`Pais: ${pais}`);
