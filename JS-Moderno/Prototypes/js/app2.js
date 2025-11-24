function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

const ivan = new Client("Ivan", 5000);

function clienteFormatter(client) {
  const { name, balance } = client;
  return `The balance of cliente ${name} is ${balance}`;
}

console.log(clienteFormatter(ivan));

function Company(name, balance, category) {
  this.name = name;
  this.balance = balance;
  this.category = category;
}

const izzi = new Company("izzi", 10000000, "Develpoment");

function companyFormatter(company) {
  const { name, balance, category } = company;
  return `The company ${name} has $${balance} and belong to ${category}`;
}

console.log(companyFormatter(izzi));
