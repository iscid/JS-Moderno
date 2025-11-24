function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

// Prototypes of Client
Client.prototype.clientType = function () {
  let type;

  if (this.balance > 10000) {
    type = "Gold";
  } else if (this.balance > 5000) {
    type = "Platinum";
  } else {
    type = "Normal";
  }

  return type;
};

Client.prototype.clientFormatter = function () {
  return `
    - Name: ${this.name} 
    - Balance: ${this.balance} 
    - Type: ${this.clientType()}
    `;
};

Client.prototype.withdraw = function (quantity) {
  if (quantity > this.balance) {
    return `Not avaliable, the quatity is major than balance!`;
  } else {
    return `Success, take your money...
        Your new balance is $${this.balance - quantity}
    `;
  }
};

// Instance of Client
const client = new Client("Ivan", "11000");
console.log(client.clientFormatter());
console.log(client.withdraw(1000));

function Person(name, balance, phone) {
  Client.call(this, name, balance);
  this.phone = phone;
}

// Inheritance
Person.prototype = Object.create(Client.prototype);
Person.prototype.constructot = Client;

// The new prototypes after inheritance
Person.prototype.showPhone = function () {
  return `The phone is ${this.phone}`;
};

const person = new Person("David", 20000, 7773387445);
console.log(person);
console.log(person.clientFormatter());
console.log(person.showPhone());
