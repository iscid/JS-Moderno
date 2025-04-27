const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

// Unir dos objetos
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);
