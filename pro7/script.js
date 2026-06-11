let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText;

    
        if (value === "C") {
            expression = "";
            input.value = "";
            return;
        }

        
        if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
            return;
        }

        
        if (value === "=") {
            try {
                expression = eval(expression);
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
            return;
        }

        expression += value;
        input.value = expression;
    });
});