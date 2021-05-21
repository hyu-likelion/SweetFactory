const inputLine = document.getElementById('input-line');

function put(val) {
    inputLine.value = inputLine.value + val;
}

function calculate() {
    const result = eval(inputLine.value)
    inputLine.value = result
}

function reset() {
    inputLine.value = ""
}