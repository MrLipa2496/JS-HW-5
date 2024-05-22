// Ex1

console.log("\nEx1\n\n");
const customer = {
  name: "Alex",
  surname: "Lipa",
  email: "email@gmail.com",
  password: "1q2w3e4r5t",
  phoneNumber: 1111111111,
  address: {
    town: "Zaporizhia",
    street: "Patriotic",
    building: 63,
    apartment: 1,
  },
  adressOutput() {
    return `${this.address.town}, ${this.address.street}, ${this.address.building}, Apt. ${this.address.apartment}`;
  },
  changePhoneNumber(newNumber) {
    this.phoneNumber = newNumber;
  },
  isMale: true,
};

console.log(customer.adressOutput());
customer.changePhoneNumber(2222222222);
console.log(customer.phoneNumber);

const customerCopy1 = Object.assign({}, customer);
console.log(customerCopy1 === customer);

const customerCopy2 = { ...customer };
console.log(customerCopy2 === customer);

delete customer.address;
console.log(customer);

function cardHtml(name, surname, email, phoneNumber, gender) {
  return `
  <article class = "card">
    <h2 class="name-surname">BIO: ${name} ${surname}</h2>
    <p class="email">Email: ${email}</p>
    <p class="phone-num">Phone number: ${phoneNumber}</p>
    <p class="gender">Gender: ${gender ? "Male" : "Female"}</p>
  </article>`;
}

const card = cardHtml(
  customer.name,
  customer.surname,
  customer.email,
  customer.phoneNumber,
  customer.isMale
);
document.write(card);

// Ex2

console.log("\nEx2\n\n");

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (const key in cat) {
  console.log(key, cat[key]);
}

// Ex3

console.log("\nEx3\n\n");

function Book(author, title, year, publisher, price) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.publisher = publisher;
  this.price = price;
}

Book.prototype.calculateAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year;
};

Book.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const book1 = new Book(
  "Stephen King",
  "The Shining",
  1977,
  { city: "New York", name: "Doubleday" },
  15.99
);

console.log(book1.calculateAge());
console.log(book1.price);
book1.changePrice(12.99);
console.log(book1.price);

console.log(book1);
