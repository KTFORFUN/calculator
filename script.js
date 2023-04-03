const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.getAttribute("data-value");
    });
});

equalsButton.addEventListener("click", () => {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "エラー";
    }
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

backspaceButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
