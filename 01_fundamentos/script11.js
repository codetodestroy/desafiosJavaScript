function multiplicationTable(n) {
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += n + ' x ' + i + ' = ' + (n * i) + '\n';
    }
    return tabuada;
}

console.log(multiplicationTable(7));