const whiteInput = document.getElementById("white");
const redInput = document.getElementById("red");
const blueInput = document.getElementById("blue");
const greenInput = document.getElementById("green");
const buyInInput = document.getElementById("buyin");\
const buyInValueInput = document.getElementById("buyinvalue");

const outputText = document.getElementById("moneyout");

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click', calculate);

function calculate () {
    var chipValue = buyInValue.value / 250;
    var total = -(buyInInput.value * buyInValue.value);
    total += whiteInput.value * 50 * chipValue;
    total += redInput.value * 25 * chipValue;
    total += blueInput.value * 5 * chipValue;
    total += greenInput.value * 1 * chipValue;

    total = total.toFixed(2);

    outputText.value = total;


}


