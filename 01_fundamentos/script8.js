function calculator(numA, numB, operator) {
    var result = 0;
    switch(operator) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            result = numA / numB;
            break;
        default: 
            result = 'Operador inválido!';
    }
    return result;
}

console.log(calculator(5, 5, '+'));