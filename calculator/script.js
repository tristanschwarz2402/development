window.loadIntoShowNumbers = function (pushButton) {
    // console.log(pushButton);
    document.getElementById("showNumbers").innerHTML += pushButton;
}

function storeNumber(number) {
    // parse float weil es könnte ja auch eine Kommazahl sein.
    number = parseFloat(number);
    numbersToCalculate.push(number);
    document.getElementById("showNumbers").innerHTML = "";
    // console.log(numbersToCalculate);
}

window.loadOperation = function (operation) {
    const numberToStore = document.getElementById("showNumbers").innerHTML;
    storeNumber(numberToStore);
    operationToCalculate = operation;
}

window.doCalculate = function () {

    // aktuelle Zahl vom Display holen
    let number = document.getElementById("showNumbers").innerHTML;
    storeNumber(number);

    let i = 0;
    let result = 0;

    // console.log(numbersToCalculate);

    if (operationToCalculate === "+") {
        // console.log('addieren');
        while (i <= numbersToCalculate.length - 1) {
            result += numbersToCalculate[i];
            i++;
        }
    } else if (operationToCalculate === "-") {
        // console.log('subtrahieren');
        while (i <= numbersToCalculate.length - 1) {
            if (i === 0) {
                result = numbersToCalculate[i];
            } else {
                result -= numbersToCalculate[i];
            }
            i++;
        }
    } else if (operationToCalculate === "*") {
        // console.log('multiplizieren');
        while (i <= numbersToCalculate.length - 1) {
            if (i === 0) {
                result = numbersToCalculate[i];
            } else {
                result *= numbersToCalculate[i];
            }
            i++;
        }
    } else {
        // console.log('dividieren');
        while (i <= numbersToCalculate.length - 1) {
            if (i === 0) {
                result = numbersToCalculate[i];
            } else {
                result /= numbersToCalculate[i];
            }
            i++;
        }
    }
    document.getElementById("showNumbers").innerHTML = result;
}

window.clearAll = function () {
    document.getElementById("showNumbers").innerHTML = "";
    numbersToCalculate = [];
    operationToCalculate = "";
    alert("clear All");
}

window.clearCurrent = function () {
    document.getElementById("showNumbers").innerHTML = "";
}

// erstellen einer globalen Variable um meine Zahlen darin zu speichern
let numbersToCalculate = [];
let operationToCalculate;


