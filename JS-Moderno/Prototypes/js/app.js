// Object literal
const cliente = {
  nombre: "Ivan",
  saldo: 500,
};

console.log(cliente);
console.log(typeof cliente);

// Object Constructor
function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

const ivan = new Client("Ivan", 500);
console.log(ivan);
