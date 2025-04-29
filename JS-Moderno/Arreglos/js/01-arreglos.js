const meses = ["Enero", "Febrero", "Marzo"];
meses.forEach((mes) => console.log(mes));

const numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros);

// Accede a todos los elementos del arreglo en forma de tabla
console.table(meses);

// Accede a una posición en específico
console.log(meses[0]);

// Recorre el arreglo mediante un for
for (let i = 0; i < meses.length; i++) {
  console.log(`Mes: ${meses[i]}`);
}

// Agregar elementos al arreglo
meses.push("Abril");
console.table(meses);

numeros.unshift(0);
console.table(numeros);

const carrito = [];

function Producto(nombre, precio) {
  (this.nombre = nombre), (this.precio = precio);
}

const productoUno = new Producto("Monitor Curvo 20 Pulgadas", 600);
const productoDos = new Producto("Smartphone", 1000);

const productoTres = {
  nombre: "Tablet",
  precio: 400,
};

carrito.push(productoUno);
carrito.push(productoDos);
carrito.unshift(productoTres);

console.table(carrito);
