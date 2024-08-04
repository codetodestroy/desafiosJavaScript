function calculadora(numA, numB, operador) {
    var resultado = 0;
    switch(operador) {
        case '+':
            resultado = numA + numB;
            break;
        case '-':
            resultado = numA - numB;
            break;
        case '*':
            resultado = numA * numB;
            break;
        case '/':
            resultado = numA / numB;
            break;
        default: 
            resultado = 'Operador inválido!';
    }
    return resultado;
}

console.log(calculadora(5, 5, '+'));