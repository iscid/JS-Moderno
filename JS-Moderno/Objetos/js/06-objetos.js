const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      // this hace referencia al objeto
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    );
  },
};

producto.mostrarInfo();
