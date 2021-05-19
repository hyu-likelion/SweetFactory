const input = document.querySelector("input")

function Add(text) {
    input.value += text;
}

function Reset() {
    input.value="";
};

function Calculate() {
    let expression = input.value;
    input.value = eval(expression);
};