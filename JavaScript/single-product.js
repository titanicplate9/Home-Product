const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

function plus1() {
    const num = Number(number.textContent); 
    number.textContent = num + 1;

if (number.textContent > 3) {
    number.textContent = 3;
    alert("You can't add more than 3 items to the cart");
}

}

function minus1() {
    const num = Number(number.textContent);
    number.textContent = num - 1;

    if (number.textContent < 1) {
       number.textContent = 1;
       alert("You can't add less than 1 item to the cart");
    }
}