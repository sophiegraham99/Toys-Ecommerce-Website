//Nav Bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

//opens hamburger muenu
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.remove("active");
    nav.classList.add("active");
  });
}
//closes hamburger menu
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/* SHOPPING CART ----------------------------------------------
---------------------------------------------------------------*/

let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let openShopping = document.getElementById("shopping-bag");
let closeShopping = document.querySelector(".closeShopping");

//opens shopping cart in sidebar
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
//closes shopping cart in sidebar
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    collection: "Mohair Collection",
    name: "Mariah",
    image: "mohair/mariah.jpg",
    price: 255,
  },
  {
    id: 2,
    collection: "Mohair Collection",
    name: "Aretha",
    image: "mohair/aretha.jpg",
    price: 295,
  },
  {
    id: 3,
    collection: "Mohair Collection",
    name: "Cogwheel",
    image: "mohair/cogwheel.jpg",
    price: 240,
  },
  {
    id: 4,
    collection: "Mohair Collection",
    name: "Schubert",
    image: "mohair/schubert.jpg",
    price: 235,
  },
  {
    id: 5,
    collection: "Mohair Collection",
    name: "Christina",
    image: "mohair/christina.jpg",
    price: 255,
  },
  {
    id: 6,
    collection: "Mohair Collection",
    name: "Beatrix",
    image: "mohair/mariah.jpg",
    price: 360,
  },
  {
    id: 7,
    collection: "Mohair Collection",
    name: "Gershwin",
    image: "mohair/gershwin.jpg",
    price: 235,
  },
  {
    id: 8,
    collection: "Mohair Collection",
    name: "Love Lace",
    image: "mohair/lovelace.jpg",
    price: 190,
  },
  {
    id: 9,
    collection: "Plush Collection",
    name: "Forever Friend",
    image: "plush/foreverfriend.jpg",
    price: 155,
  },
  {
    id: 10,
    collection: "Plush Collection",
    name: "Anita",
    image: "plush/anita.jpg",
    price: 150,
  },
  {
    id: 11,
    collection: "Plush Collection",
    name: "Graham",
    image: "plush/graham.jpg",
    price: 140,
  },
  {
    id: 12,
    collection: "Plush Collection",
    name: "Carnival",
    image: "plush/carnival.jpg",
    price: 135,
  },
  {
    id: 13,
    collection: "Plush Collection",
    name: "Gina",
    image: "plush/gina.jpg",
    price: 125,
  },
  {
    id: 14,
    collection: "Plush Collection",
    name: "Hilary",
    image: "plush/hilary.jpg",
    price: 125,
  },
  {
    id: 15,
    collection: "Plush Collection",
    name: "Miranda",
    image: "plush/miranda.jpg",
    price: 125,
  },
  {
    id: 16,
    collection: "Plush Collection",
    name: "Stewart",
    image: "plush/stewart.jpg",
    price: 125,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="img/bears/${value.image}">
            <div class="collection">${value.collection}</div>
            <div class="title">${value.name}</div>
            <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
            <div class="price">£${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})"><i class="far fa-shopping-bag bag"></i></button>`;
    list.appendChild(newDiv);
  });
}

initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="img/bears/${value.image}"/></div>
                <div class="itemName">${value.name}</div>
                <div>£${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
