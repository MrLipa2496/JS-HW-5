// Ex0

console.log("Default array");
const arrNum = [1, 4, 8, -3, -7, 2, 5];
console.log(arrNum);

// Ex1
console.log("Del end element");
arrNum.pop();
console.log(arrNum);

console.log("Del first element");
arrNum.shift();
console.log(arrNum);

console.log("Add end element");
arrNum.push(10);
console.log(arrNum);

console.log("Add first element");
arrNum.unshift(20);
console.log(arrNum);

// Ex2
console.log("Length array", arrNum.length);

// Ex3
console.log("\nCopy array FIRST way");
const copyArr1 = [...arrNum];
console.log(copyArr1);

console.log("Copy array SECOND way");
const copyArr2 = Array.from(arrNum);
console.log(copyArr2);

console.log("Copy array THIRD way");
const copyArr3 = arrNum.slice();
console.log(copyArr3);

// Ex4

console.log("\nElements with even indices");
for (let i = 0; i < arrNum.length; i++) {
  if (i % 2 === 0) {
    console.log(arrNum[i]);
  }
}

// Ex5

let dob = 1;

for (let i = 0; i < arrNum.length; i++) {
  dob *= arrNum[i];
}
console.log(`\nThe product of array elements is ${dob}`); // dob must be 268800

// Ex6

const phones = [
  {
    id: 1,
    img: "https://hotline.ua/img/tx/344/3442105435.jpg",
    brand: "Apple",
    model: "iPhone 12",
    color: "Black",
    price: 999,
    RAM: "6GB",
  },
  {
    id: 2,
    img: "https://hotline.ua/img/tx/260/2604053655.jpg",
    brand: "Samsung",
    model: "Galaxy S21",
    color: "Phantom Silver",
    price: 899,
    RAM: "8GB",
  },
  {
    id: 3,
    img: "https://hotline.ua/img/tx/333/3333640185.jpg",
    brand: "Xiaomi",
    model: "12S Ultra",
    color: "Dark Green",
    price: 700,
    RAM: "8GB",
  },
];

function cardHtml(imgUrl, brand, model, color, price, ram) {
  return `
  <article class = "card-wrapper">
      <img class="phone-img" src="${imgUrl}" alt="" />
      <h2 class="brand-model">${brand} ${model}</h2>
      <p class="info">${color} ${ram}</p>
      <p class="price">${price}$</p>
  </article>
`;
}

for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  const card = cardHtml(
    phone.img,
    phone.brand,
    phone.model,
    phone.color,
    phone.price,
    phone.RAM
  );
  document.write(card);
}

let sum = 0;

for (let i = 0; i < phones.length; i++) {
  sum += phones[i].price; // 2598
}

const avg = sum / phones.length; // 866

alert(`Average price of phones: ${avg}$`);

const ramCounts = {};

for (let i = 0; i < phones.length; i++) {
  const ram = phones[i].RAM;
  if (ramCounts[ram]) {
    ramCounts[ram]++;
  } else {
    ramCounts[ram] = 1;
  }
}

console.log("Кількість телефонів з RAM 4, 6, 8, 12 ГБ:", ramCounts);

// Ex7

console.log("\nEx7 FILTER, not a zero");

const startArr = [-1, 5, 0, 9, -10];
const notZero = num => {
  return num !== 0;
};

const newArr = startArr.filter(notZero);
console.log(newArr);

// Ex8

console.log("\nEx8 FILTER, not a zero devision by 100");

const startArr2 = [99, 5, 0, 9, 30];
const devisionBy100 = num => {
  return num / 100;
};

const arrDevisionBy100 = startArr2.map(devisionBy100);
console.log(arrDevisionBy100);

// Ex9

console.log("\nEx9 forEach, array elements cubed.");

const startArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
startArr3.forEach(num => {
  console.log(num ** 3);
});

// Ex10

console.log("\nEx10 forEach, the index of the element whose square is 100.");

const startArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findSqrt100 = n => {
  return n ** 2 === 100;
};

const index = startArr4.findIndex(findSqrt100);

if (index !== -1) {
  startArr4.splice(index, 1); // використовується splice замість slice
  console.log(`Елемент з індексом ${index} видалено.`);
} else {
  console.log("Елемент, квадрат якого дорівнює 100, не знайдено.");
}

// Ex11

const startArr5 = [2, 30, 40, 22, 10, 20, 24, 37];

const isEvenNum = n => {
  return n % 2 === 0;
};

const isAllEvenNum = startArr5.every(isEvenNum);
console.log(
  `\nEx11 every, in array ${startArr5} all elements is even? ${isAllEvenNum}`
);

// Ex12

const startArr6 = [2, 30, 43, 22, 11, 23, 21, -35];

const isNegative = n => {
  return n < 0;
};

const itsOneNegInArr = startArr6.some(isNegative);

console.log(
  `\nEx12 some, is there at least one negative element in the array? ${itsOneNegInArr}`
);
