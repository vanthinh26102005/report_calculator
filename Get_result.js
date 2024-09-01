document.addEventListener("DOMContentLoaded", () => {
    //input
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');

    var option = "add"; // default value for option

    var res_btn = document.getElementById('btn_Solve');

    // listen the changes of event through choose operator
    let selection = document.getElementById("operator");
    selection.addEventListener("change", function () {
        option = selection.value;
    });

    // listen if event is clicked, click the button "Solve"
    res_btn.addEventListener("click", function () {
        getOperator(option);
    });

    function getOperator(text) {

        const value1 = parseFloat(num1.value); // convert text to float
        const value2 = parseFloat(num2.value);

        let result;
        switch (text) {
            case "add":
                result = add(value1, value2);
                break;
            case "subtract":
                result = subtract(value1, value2);
                break;
            case "multiply":
                result = multiply(value1, value2);
                break;
            case "divide":
                result = divide(value1, value2);
                break;
            default:
                result = "Unknown operator";
        }

        // Show the res
        res.textContent = `Result: ${result}`;
    }

    //Process
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    }
    
    //output
    var res = document.getElementById('res');
});
