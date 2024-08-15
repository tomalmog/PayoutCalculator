const whiteInput = document.getElementById("white");
const redInput = document.getElementById("red");
const blueInput = document.getElementById("blue");
const greenInput = document.getElementById("green");
const buyInInput = document.getElementById("buyin");

const outputText = document.getElementById("moneyout");

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click', calculate);

function calculate () {
    var total = buyInInput.value * -10;
    total += whiteInput.value * 2;
    total += redInput.value * 1;
    total += blueInput.value * 0.2;
    total += greenInput.value * 0.04;

    total = total.toFixed(2);

    outputText.value = total;


}


