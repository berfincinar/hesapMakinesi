var calculator = {
    result: 0,
    operations: "",
    //calculate result
    calculate: function() {
        try {
            this.result = eval(this.operations);
            if (!(Number.isInteger(this.result)))
                this.result = this.result.toFixed(10);
            if (this.result == null || this.result == undefined)
                this.result = '0';
        } catch (error) {
            console.log(error);
            this.result = "NaN";
            this.clear();
        }

    },
    //clear operations
    clear: function() {
        this.operations = "";
    },
    //add new operator
    addOperator: function(operator) {

        this.operations = "".concat(this.operations, operator.trim());
        this.operations.trim();
    },


};

//update ui for changes
function updateUI() {

    display.value = calculator.operations;
    //   .split("").reverse().join("");
}

//display result
function displayResult() {
    display.value = calculator.result;
}

//main flow start
var display = document.getElementById("screen");
var allButtons = document.getElementsByTagName("button");
//handle click event
[...allButtons].forEach(element => {

    element.addEventListener('click', function() {
        if (element.id == "clear") {
            calculator.clear();
            updateUI();
        } else if (element.id == "equals") {
            calculator.calculate();
            calculator.clear();
            updateUI();
            displayResult();
        } else {
            calculator.addOperator(element.value);
            updateUI();
        }
    });
});