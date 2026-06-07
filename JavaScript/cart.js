// const totalPrice = quantity * unitPrice; // ino neveshtam yadam nare
const itemList = document.getElementById("item-list");
const cartPage = document.querySelector(".cart-products")
// const number = document.getElementById("number");
// const priceNum = Number(price)
const nothing = document.getElementById("nothing")
const cartSidebar = document.getElementById("cart-sidebar")
const backDrop = document.getElementById("backdrop")
function cartDisplay() {
    cartSidebar.style.display = "flex";
    backDrop.style.display = "block";
}

function exitCart() {
    cartSidebar.style.display = "none";
    backDrop.style.display = "none";
}

function addProductToCart({ id, title, price, quantity, imgSrc }, fromStorage = false) {
    const nothing = document.getElementById("nothing");
    const itemList = document.getElementById("item-list");

    // فقط وقتی از دکمه کلیک شده ذخیره کن، نه موقع بارگذاری
    if (!fromStorage) {
        let cart = JSON.parse(localStorage.getItem("products")) || [];
        cart.push({ id, title, price, quantity, imgSrc });
        localStorage.setItem("products", JSON.stringify(cart));
    }

    // ساخت نمای ظاهری در DOM
    const newOrder = document.createElement("li");
    const newImg = document.createElement("img");
    const division = document.createElement("div");
    division.className = "item";
    const innerDivision = document.createElement("div");
    const innerDivision2 = document.createElement("div");
    innerDivision2.className = "price";
    const productName = document.createElement("h4");
    productName.innerHTML = title;
    const productNumber = document.createElement("span");
    const productPrice = document.createElement("span");
    productPrice.className = "productPrice";
    productPrice.innerHTML = `Rs.${price}`;
    productNumber.innerHTML = `${quantity} × `;
    const exitBTN = document.createElement("button");
    const exitImage = document.createElement("img");

    newImg.setAttribute("src", imgSrc);
    exitImage.setAttribute("src", "/img/exit.png");

    newOrder.appendChild(newImg);
    itemList.appendChild(newOrder);
    newOrder.appendChild(division);
    division.appendChild(innerDivision);
    division.appendChild(innerDivision2);
    innerDivision.appendChild(productName);
    innerDivision2.appendChild(productNumber);
    productNumber.appendChild(productPrice);
    newOrder.appendChild(exitBTN);
    exitBTN.appendChild(exitImage);

    if (nothing) nothing.style.display = "none";

    // حذف از DOM و حافظه
    exitBTN.addEventListener("click", function (event) {
        event.preventDefault();
        newOrder.remove();

        let updatedCart = JSON.parse(localStorage.getItem("products")) || [];
        updatedCart = updatedCart.filter(item => item.id !== id);
        localStorage.setItem("products", JSON.stringify(updatedCart));

        if (itemList.children.length === 0 || itemList.children.length === 1) {
            nothing.style.display = "flex";
        }
    });
}


function asgardSofa(event) {
    event.preventDefault();

    const price = document.getElementById("calcPrice");
    const quantity = 1; // یا مقدار واقعی از input
    const unitPrice = price.textContent;

    addProductToCart({
        id: "asgard-sofa",
        title: "Asgard sofa",
        price: unitPrice,
        quantity: quantity,
        imgSrc: "/img/asgard sofa smaller.jpg"
    });
}

window.onload = function () {
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    const nothing = document.getElementById("nothing");

    if (cart.length === 0) {
        nothing.style.display = "flex";
    } else {
        nothing.style.display = "none";
        cart.forEach(product => {
            addProductToCart(product, true); // علامت می‌زنیم که از حافظه میاد
        });
    }
};


function lolito(event) {
    event.preventDefault();

    const price = document.getElementById("calcPrice2");
    const quantity = 1;
    const unitPrice = price.textContent;

    addProductToCart({
        id: "lolito",
        title: "Lolito",
        price: unitPrice,
        quantity: quantity,
        imgSrc: "/img/lolito.png"
    });
}


function leviosa(event) {
    event.preventDefault();

    const price = document.getElementById("calcPrice3");
    const quantity = 1;
    const unitPrice = price.textContent;

    addProductToCart({
        id: "leviosa",
        title: "Leviosa",
        price: unitPrice,
        quantity: quantity,
        imgSrc: "/img/levlosa.png"
    });
}


function syltherine(event) {
    event.preventDefault();

    const price = document.getElementById("calcPrice4");
    const quantity = 1;
    const unitPrice = price.textContent;

    addProductToCart({
        id: "syltherine",
        title: "Syltherine",
        price: unitPrice,
        quantity: quantity,
        imgSrc: "/img/syltherine.png"
    });
}


function respira(event) {
    event.preventDefault();

    const price = document.getElementById("calcPrice5");
    const quantity = 1;
    const unitPrice = price.textContent;

    addProductToCart({
        id: "respira",
        title: "Respira",
        price: unitPrice,
        quantity: quantity,
        imgSrc: "/img/respira.png"
    });
}

function copyListItemsToStorage() {
  const itemList = document.getElementById("item-list");
  const items = itemList.querySelectorAll("li");

  const data = [];

  items.forEach(item => {
    if (!item.classList.contains("nothing")) {
      data.push(item.innerHTML); // فقط محتوا رو ذخیره می‌کنیم
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(data));
}

window.onload = function () {
  const cartPage = document.querySelector(".cart-products");
  const emptyItem = document.getElementById("empty");

  const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (storedItems.length === 0) {
    if (emptyItem) emptyItem.style.display = "block";
  } else {
    if (emptyItem) emptyItem.style.display = "none";

    storedItems.forEach(content => {
      const li = document.createElement("li");
      li.innerHTML = content;
      cartPage.appendChild(li);
    });
  }
};


