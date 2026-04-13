let inputValue = 10;
let milesToKm = false;
let result = 0;


if (milesToKm) {
 result = inputValue * 1.60934;
} else {
 result = inputValue / 1.60934;
}

const resultString = inputValue + " miles are " + result + " km";
console.log(resultString);

const resultElement = document.getElementById('resultElement');
resultElement.innerHTML = resultString;
