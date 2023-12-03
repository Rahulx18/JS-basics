function performOperation(operation) {
    let num1 = parseFloat(document.getElementById("num1-input").value);
    let num2 = parseFloat(document.getElementById("num2-input").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result-el").textContent = "Please enter valid numbers";
        return;
    }

    let ans;

    switch (operation) {
        case 'add':
            ans = num1 + num2;
            document.getElementById("result-el").textContent = "Sum: " + ans;
            break;
        case 'subtract':
            ans = num1 - num2;
            document.getElementById("result-el").textContent = "Subtraction: " + ans;
            break;
        case 'multiply':
            ans = num1 * num2;
            document.getElementById("result-el").textContent = "Multiplication: " + ans;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById("result-el").textContent = "Cannot divide by zero";
                return;
            }
            ans = num1 / num2;
            document.getElementById("result-el").textContent = "Division: " + ans;
            break;
        case 'reset':
            document.getElementById("num1-input").value = "";
            document.getElementById("num2-input").value = "";
            document.getElementById("result-el").textContent = "";
            break;
        default:
            document.getElementById("result-el").textContent = "Invalid operation";
    }
}
