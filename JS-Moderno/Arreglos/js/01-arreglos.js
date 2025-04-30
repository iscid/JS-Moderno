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

// Crear un nuevo arreglo a partir de otro
const nuevoArray = [...meses, ...numeros];
console.table(nuevoArray);

let nuevoCarrito = [];

const productoCuatro = {
  nombre: "Alexa echo 3",
  precio: 25,
};

// Se llena un nuevo arreglo con otros arreglos utilizando spreed operator
nuevoCarrito = [productoCuatro, ...carrito, productoDos];
console.log(nuevoCarrito);

// Elimina el último elemento
nuevoCarrito.pop();

// Elimina el primer elemento
nuevoCarrito.shift();

console.table(nuevoCarrito);

// Elimina a partir de una posición en específico, el segundo parámetro es la cantidad de elementos a eliminar
nuevoCarrito.splice(1, 1);

console.table(nuevoCarrito);

// Destructuring de arrays
console.table(carrito);

const numerosDos = [10, 20, 30, 40, 50];

// Se asginan con base a la posición
const [primero] = numerosDos;
console.log(primero);

const [, , tercero] = numerosDos;
console.log(tercero);

const [primeroDos, ...nuevoArreglo] = numeros;
console.log(nuevoArray);
