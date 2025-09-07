// const totalPrice = quantity * unitPrice; // ino neveshtam yadam nare
const itemList = document.getElementById("item-list");
const number = document.getElementById("number");
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

function asgardSofa(event) {
    event.preventDefault();
    const price = document.getElementById("calcPrice");
    const nothing = document.getElementById("nothing")
    const newOrder = document.createElement("li")
    const newImg = document.createElement("img")
    const division = document.createElement("div")
    division.className = "item"
    const innerDivision = document.createElement("div")
    const innerDivision2 = document.createElement("div")
    innerDivision2.className = "price"
    const productName = document.createElement("h4")
    productName.innerHTML = "Asgard sofa"
    const productNumber = document.createElement("span")
    const quantity = number?.value ?? number?.textContent ?? 1;
    const unitPrice = price.value || price.textContent;
    const productPrice = document.createElement("span")
    productPrice.className = "productPrice"
    productPrice.innerHTML = `Rs.${unitPrice}`
    productNumber.innerHTML = `${quantity} × `;
    const exitBTN = document.createElement("button")
    const exitImage = document.createElement("img")
    newImg.setAttribute("src", "/img/asgard sofa smaller.jpg")
    exitImage.setAttribute("src", "/img/exit.png")
    newOrder.appendChild(newImg)
    itemList.appendChild(newOrder)
    newOrder.appendChild(division)
    division.appendChild(innerDivision)
    division.appendChild(innerDivision2)
    innerDivision.appendChild(productName)
    innerDivision2.appendChild(productNumber)
    productNumber.appendChild(productPrice)
    newOrder.appendChild(exitBTN)
    exitBTN.appendChild(exitImage)

    if (nothing) {
        nothing.style.display = "none";
    }
     exitBTN.addEventListener("click" , function name(event) {
        event.preventDefault();
        newOrder.remove();
            if (itemList.children.length == 0 || itemList.children.length === 1) {
    nothing.style.display = "flex";
}
    })
}

function lolito(event) {
    event.preventDefault();
    const price = document.getElementById("calcPrice2");
    const nothing = document.getElementById("nothing")
    const newOrder = document.createElement("li")
    const newImg = document.createElement("img")
    const division = document.createElement("div")
    division.className = "item"
    const innerDivision = document.createElement("div")
    const innerDivision2 = document.createElement("div")
    innerDivision2.className = "price"
    const productName = document.createElement("h4")
    productName.innerHTML = "Lolito"
    const productNumber = document.createElement("span")
    const quantity = number?.value ?? number?.textContent ?? 1;
    const unitPrice = price.value || price.textContent;
    const productPrice = document.createElement("span")
    productPrice.className = "productPrice"
    productPrice.innerHTML = `Rs.${unitPrice}`
    productNumber.innerHTML = `${quantity} × `;
    const exitBTN = document.createElement("button")
    const exitImage = document.createElement("img")
    newImg.setAttribute("src", "/img/lolito.png")
    exitImage.setAttribute("src", "/img/exit.png")
    newOrder.appendChild(newImg)
    itemList.appendChild(newOrder)
    newOrder.appendChild(division)
    division.appendChild(innerDivision)
    division.appendChild(innerDivision2)
    innerDivision.appendChild(productName)
    innerDivision2.appendChild(productNumber)
    productNumber.appendChild(productPrice)
    newOrder.appendChild(exitBTN)
    exitBTN.appendChild(exitImage)
        if (nothing) {
        nothing.style.display = "none";
    }
 
     exitBTN.addEventListener("click" , function name(event) {
        event.preventDefault();
        newOrder.remove();
           if (itemList.children.length == 0 || itemList.children.length === 1) {
    nothing.style.display = "flex";
}
    })
}

function leviosa(event) {
    event.preventDefault();
    const price = document.getElementById("calcPrice3");
    const nothing = document.getElementById("nothing")
    const newOrder = document.createElement("li")
    const newImg = document.createElement("img")
    const division = document.createElement("div")
    division.className = "item"
    const innerDivision = document.createElement("div")
    const innerDivision2 = document.createElement("div")
    innerDivision2.className = "price"
    const productName = document.createElement("h4")
    productName.innerHTML = "Leviosa"
    const productNumber = document.createElement("span")
    const quantity = number?.value ?? number?.textContent ?? 1;
    const unitPrice = price.value || price.textContent;
    const productPrice = document.createElement("span")
    productPrice.className = "productPrice"
    productPrice.innerHTML = `Rs.${unitPrice}`
    productNumber.innerHTML = `${quantity} × `;
    const exitBTN = document.createElement("button")
    const exitImage = document.createElement("img")
    newImg.setAttribute("src", "/img/levlosa.png")
    exitImage.setAttribute("src", "/img/exit.png")
    newOrder.appendChild(newImg)
    itemList.appendChild(newOrder)
    newOrder.appendChild(division)
    division.appendChild(innerDivision)
    division.appendChild(innerDivision2)
    innerDivision.appendChild(productName)
    innerDivision2.appendChild(productNumber)
    productNumber.appendChild(productPrice)
    newOrder.appendChild(exitBTN)
    exitBTN.appendChild(exitImage)

    if (nothing) {
        nothing.style.display = "none";
    }
     exitBTN.addEventListener("click" , function name(event) {
        event.preventDefault();
        newOrder.remove();
            if (itemList.children.length == 0 || itemList.children.length === 1) {
    nothing.style.display = "flex";
}
    })
}

function syltherine(event) {
    event.preventDefault();
    const price = document.getElementById("calcPrice4");
    const nothing = document.getElementById("nothing")
    const newOrder = document.createElement("li")
    const newImg = document.createElement("img")
    const division = document.createElement("div")
    division.className = "item"
    const innerDivision = document.createElement("div")
    const innerDivision2 = document.createElement("div")
    innerDivision2.className = "price"
    const productName = document.createElement("h4")
    productName.innerHTML = "Syltherine"
    const productNumber = document.createElement("span")
    const quantity = number?.value ?? number?.textContent ?? 1;
    const unitPrice = price.value || price.textContent;
    const productPrice = document.createElement("span")
    productPrice.className = "productPrice"
    productPrice.innerHTML = `Rs.${unitPrice}`
    productNumber.innerHTML = `${quantity} × `;
    const exitBTN = document.createElement("button")
    const exitImage = document.createElement("img")
    newImg.setAttribute("src", "/img/syltherine.png")
    exitImage.setAttribute("src", "/img/exit.png")
    newOrder.appendChild(newImg)
    itemList.appendChild(newOrder)
    newOrder.appendChild(division)
    division.appendChild(innerDivision)
    division.appendChild(innerDivision2)
    innerDivision.appendChild(productName)
    innerDivision2.appendChild(productNumber)
    productNumber.appendChild(productPrice)
    newOrder.appendChild(exitBTN)
    exitBTN.appendChild(exitImage)
        if (nothing) {
        nothing.style.display = "none";
    }
     exitBTN.addEventListener("click" , function name(event) {
        event.preventDefault();
        newOrder.remove();
            if (itemList.children.length == 0 || itemList.children.length === 1) {
    nothing.style.display = "flex";
}
    })
}

function respira(event) {
    event.preventDefault();
    const price = document.getElementById("calcPrice5");
    const nothing = document.getElementById("nothing")
    const newOrder = document.createElement("li")
    const newImg = document.createElement("img")
    const division = document.createElement("div")
    division.className = "item"
    const innerDivision = document.createElement("div")
    const innerDivision2 = document.createElement("div")
    innerDivision2.className = "price"
    const productName = document.createElement("h4")
    productName.innerHTML = "Respira"
    const productNumber = document.createElement("span")
    const quantity = number?.value ?? number?.textContent ?? 1;
    const unitPrice = price.value || price.textContent;
    const productPrice = document.createElement("span")
    productPrice.className = "productPrice"
    productPrice.innerHTML = `Rs.${unitPrice}`
    productNumber.innerHTML = `${quantity} × `;
    const exitBTN = document.createElement("button")
    const exitImage = document.createElement("img")
    newImg.setAttribute("src", "/img/respira.png")
    exitImage.setAttribute("src", "/img/exit.png")
    newOrder.appendChild(newImg)
    itemList.appendChild(newOrder)
    newOrder.appendChild(division)
    division.appendChild(innerDivision)
    division.appendChild(innerDivision2)
    innerDivision.appendChild(productName)
    innerDivision2.appendChild(productNumber)
    productNumber.appendChild(productPrice)
    newOrder.appendChild(exitBTN)
    exitBTN.appendChild(exitImage)
    if (nothing) {
        nothing.style.display = "none";
    }
     exitBTN.addEventListener("click" , function name(event) {
        event.preventDefault();
        newOrder.remove();
            if (itemList.children.length == 0 || itemList.children.length === 1) {
    nothing.style.display = "flex";
}
    })
}

function OutDoorSofa(event) {
    event.preventDefault();
    const price = document.getElementById("calcPrice2");
    const nothing = document.getElementById("nothing")
    const newOrder = document.createElement("li")
    const newImg = document.createElement("img")
    const division = document.createElement("div")
    division.className = "item"
    const innerDivision = document.createElement("div")
    const innerDivision2 = document.createElement("div")
    innerDivision2.className = "price"
    const productName = document.createElement("h4")
    productName.innerHTML = "Outdoor Sofa Set"
    const productNumber = document.createElement("span")
    const quantity = number?.value ?? number?.textContent ?? 1;
    const unitPrice = price.value || price.textContent;
    const productPrice = document.createElement("span")
    productPrice.className = "productPrice"
    productPrice.innerHTML = `Rs.${unitPrice}`
    productNumber.innerHTML = `${quantity} × `;
    const exitBTN = document.createElement("button")
    const exitImage = document.createElement("img")
    newImg.setAttribute("src", "/img/Outdoor sofa set 1.png")
    exitImage.setAttribute("src", "/img/exit.png")
    newOrder.appendChild(newImg)
    itemList.appendChild(newOrder)
    newOrder.appendChild(division)
    division.appendChild(innerDivision)
    division.appendChild(innerDivision2)
    innerDivision.appendChild(productName)
    innerDivision2.appendChild(productNumber)
    productNumber.appendChild(productPrice)
    newOrder.appendChild(exitBTN)
    exitBTN.appendChild(exitImage)

    if (nothing) {
        nothing.style.display = "none";
    }
     exitBTN.addEventListener("click" , function name(event) {
        event.preventDefault();
        newOrder.remove();
            if (itemList.children.length == 0 || itemList.children.length === 1) {
    nothing.style.display = "flex";
}
    })
}

console.log(itemList.children.length); //baraye test error va namayesh nadadan