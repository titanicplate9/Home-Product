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

const descriptionHeader = document.getElementById("descriptionHeader");
const additionalInformationHeader = document.getElementById("additionalInformationHeader");
const descriptionReviews = document.getElementById("descriptionReviews");

function changeFontDescription() {
    descriptionHeader.style.fontFamily = "poppins-medium";
    descriptionHeader.style.color = "black";
    additionalInformationHeader.style.fontFamily = "poppins-regular";
    additionalInformationHeader.style.color = "#d9d9d9";
    descriptionReviews.style.fontFamily = "poppins-regular";
    descriptionReviews.style.color = "#d9d9d9";
}

function changeFontAdditional() {
    additionalInformationHeader.style.fontFamily = "poppins-medium";
    additionalInformationHeader.style.color = "black";
    descriptionReviews.style.fontFamily = "poppins-regular";
    descriptionReviews.style.color = "#d9d9d9";
    descriptionHeader.style.fontFamily = "poppins-regular";
    descriptionHeader.style.color = "#d9d9d9";
}

function changeFontReviews() {
    descriptionReviews.style.fontFamily = "poppins-medium";
    descriptionReviews.style.color = "black";
    additionalInformationHeader.style.fontFamily = "poppins-regular";
    additionalInformationHeader.style.color = "#d9d9d9";
    descriptionHeader.style.fontFamily = "poppins-regular";
    descriptionHeader.style.color = "#d9d9d9";
}
