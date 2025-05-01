// Declaración de una función
function sumar() {
  console.log(2 + 2);
}

// Llamada a la función
sumar();

// Expresión de función
const restar = function () {
  console.log(4 - 3);
};

restar();

// Hoisting: permite utilizar las funciones que se definen de forma declarativa antes de ser creadas
multiplicar();
function multiplicar() {
  console.log(5 * 4);
}

// Funciones nativas en JS
// alert("Muestra una alerta"); Alerta en el navegador
// prompt("¿Cuál es tu edad: ?"); Similar a la alerta, espera un valor
// confirm("¿Deseas cerrar la ventana?"); Muestra una ventana con dos botones aceptar y cancelar
// console.log("Muestra un mensaje en consola"); Info en consola

// Funcion con parámetros
function dividir(n1, n2) {
  console.log(n1 / n2);
}

// Al momento de llamar la atención recibe argumentos
dividir(10, 5);

// Parámetros por defecto
function saludar(nombre = "usuario", apellido = "x") {
  console.log(`Hola: ${nombre} ${apellido}`);
}

saludar("Ivan", "Delgado");
saludar();
