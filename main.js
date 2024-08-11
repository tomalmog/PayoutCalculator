const whiteInput = document.getElementById("white");
const redInput = document.getElementById("red");
const blueInput = document.getElementById("blue");
const greenInput = document.getElementById("green");
const buyInInput = document.getElementById("buyin");

const outputText = document.getElementById("moneyout");

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click', calculate);

function calculate () {
    var total = buyInInput.value * -5;
    total += whiteInput.value * 1;
    total += redInput.value * 0.5;
    total += blueInput.value * 0.1;
    total += greenInput.value * 0.02;

    total = total.toFixed(2);

    outputText.value = total;


}


