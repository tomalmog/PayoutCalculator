const chipValue = document.getElementById("chip_value");
const chipAmount = document.getElementById("chip_amount");
const buyValue = document.getElementById("buy_value");
const buyAmount = document.getElementById("buy_amount");

const moneyIn = document.getElementById("money_in");
const moneyOut = document.getElementById("money_out");
const totalPot = document.getElementById("total_pot");

const calculateBtn = document.getElementById("calculate_btn");
const resetBtn = document.getElementById("reset_pot");

var currentPotvalue = 0;




function calculate() {

    var monIn = buyValue.value * buyAmount.value;
    monIn = monIn.toFixed(3);
    moneyIn.value = monIn;

    var moneyInHand = chipValue.value * chipAmount.value;
    currentPotvalue += moneyInHand;
    currentPotvalue = parseFloat(currentPotvalue.toFixed(3));
    totalPot.value = currentPotvalue;

    var monOut = moneyInHand - monIn;
    monOut = monOut.toFixed(3);
    moneyOut.value = monOut;

    chipAmount.value = '';
}

function reset() {
    currentPotvalue = 0;
    totalPot.value = currentPotvalue;
}


calculateBtn.addEventListener('click',calculate);
resetBtn.addEventListener('click',reset);



