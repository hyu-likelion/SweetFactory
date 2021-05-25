function reset() {
    document.getElementById('sick').value = ""
}


function calculate() {
    var sick = document.getElementById("sick");
    var result = eval(sick.value);
    document.getElementById('sick').value = result;
}


function add(x) {
    var sick = document.getElementById('sick');
    sick.value = sick.value + x ;
}
