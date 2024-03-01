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

    if (operationToCalculate === "+") {
        // console.log('addieren');
        let result = 0;

        while (i <= numbersToCalculate.length - 1) {
            result += numbersToCalculate[i];
            i++;
        }

        console.log(result);

    } else if (operationToCalculate === "-") {
        // console.log('subtrahieren');
    } else if (operationToCalculate === "*") {
        // console.log('multiplizieren');
    } else {
        // console.log('dividieren');
    } 
}

// erstellen einer globalen Variable um meine Zahlen darin zu speichern
let numbersToCalculate = [];
let operationToCalculate;


