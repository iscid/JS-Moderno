const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
  disponible: true,
};

console.log(Object.keys(producto)); // Devuelve (3) ['nombre', 'precio', 'disponible']
console.log(Object.values(producto)); // Devuelve (3) ['Monitor 32 Pulgadas', 400, true]
console.log(Object.entries(producto));
/*
Devuelve
(3) [Array(2), Array(2), Array(2)]
0: (2) ['nombre', 'Monitor 32 Pulgadas']
1: (2) ['precio', 400]
2: (2) ['disponible', true]
*/
