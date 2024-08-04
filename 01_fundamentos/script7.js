function comparingNumbers(a, b) {
    if(a > b) {
        return `${a} é maior que ${b}.`;
    } else if (a < b) {
        return `${b} é maior que ${a}.`;
    } else {
        return `${a} é igual a ${b}.`;
    }
}

console.log(comparingNumbers('C', 4));