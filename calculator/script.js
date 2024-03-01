class Calculator {
    constructor() {
        this.numbersToCalculate = [];
        this.operationToCalculate = "";
        this.displayElement = document.getElementById("showNumbers");
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener("click", (event) => {
            if (event.target.matches(".number")) {
                this.appendToDisplay(event.target.innerText);
            } else if (event.target.matches(".operator")) {
                this.storeNumber();
                this.operationToCalculate = event.target.innerText;
                this.clearDisplay();
            } else if (event.target.matches(".calculate")) {
                this.storeNumber();
                this.calculate();
            } else if (event.target.matches(".clear-all")) {
                this.clearAll();
            } else if (event.target.matches(".clear-current")) {
                this.clearDisplay();
            }
        });
    }

    appendToDisplay(value) {
        this.displayElement.innerText += value;
    }

    clearDisplay() {
        this.displayElement.innerText = "";
    }

    storeNumber() {
        let number = parseFloat(this.displayElement.innerText);
        this.numbersToCalculate.push(number);
    }

    calculate() {
        let result = this.numbersToCalculate.reduce((acc, curr) => {
            switch (this.operationToCalculate) {
                case "+":
                    return acc + curr;
                case "-":
                    return acc - curr;
                case "*":
                    return acc * curr;
                case "/":
                    return acc / curr;
                default:
                    return acc;
            }
        }, 0);
        this.displayElement.innerText = result;
    }

    clearAll() {
        this.clearDisplay();
        this.numbersToCalculate = [];
        this.operationToCalculate = "";
        alert("Clear All");
    }
}

// Initialisierung des Taschenrechners
const calculator = new Calculator();
