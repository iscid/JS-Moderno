console.log("Desde objetos");

const nombre = "Monitor de 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
  nombre: "Monitor de 32 Pulgadas",
  precio: 400,
  disponible: false,
};

// Accede al objeto producto
console.log(producto);

// Accede a cada una de las propiedades
console.log(`Precio: ${producto.precio}`);

// Agregar propiedades al objeto
producto.imagen = "imagen.jpg";
console.log(producto);

// Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);
