const diaHoy = new Date();
console.log(diaHoy); // Sun Nov 23 2025 00:46:49 GMT-0600 (hora estándar central)
moment.locale("es");
console.log(moment().format("MMMM Do YYYY h:mm:ss a")); // noviembre 23º 2025 12:45:52 am

console.log(moment().format("LLLL", diaHoy)); // domingo, 23 de noviembre de 2025 0:45

// Operaciones con fechas
console.log(moment().add(3, "days").calendar()); // Agrega 3 días: miércoles a las 0:45
