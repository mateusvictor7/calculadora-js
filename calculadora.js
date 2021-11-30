function displayInsert (num) {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + num;
}

function limparCalculo() {
    let display = document.getElementById('display');
    display.innerHTML = "";
}

function limpar() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length - 1);
}

document.getElementById('igual').addEventListener('click', calcular);

function calcular() {
    let result = document.getElementById('display').innerHTML;
    if (result) {
        document.getElementById('display').innerHTML = eval(result);
    }
}