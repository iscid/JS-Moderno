// Object Literal
const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
  disponible: true,
};

// Object Constructor
function Producto(nombre = "", precio = 0) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Tablet 10 Pulgadas", 250);
console.log(producto2);
