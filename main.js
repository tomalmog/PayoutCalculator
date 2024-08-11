const title = document.getElementById("title");
const mainDiv = document.getElementById("main");

const valuesDiv = document.getElementById("values");
const amountsDiv = document.getElementById("amounts");


const addButton = document.getElementById("addpair");
const subtractButton = document.getElementById("subtractpair");

addButton.addEventListener('click', createChipPair);
subtractButton.addEventListener('click', removeChipPair);

var onScreenPairs = [];

function createChipPair() {
    onScreenPairs.push([createInput(valuesDiv), createInput(amountsDiv)]);
}

function removeChipPair() {
    const inputs = onScreenPairs.pop();
    inputs[0].remove();
    inputs[1].remove();

}

function createInput(parent) {
    const newInput = document.createElement("input");
    parent.appendChild(newInput);
    return newInput;
}

function removeInput(parent, child) {
    parent.removeChild(child);
}




