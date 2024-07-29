function verifyDivision(divisoner, num) {
    return divisoner % num === 0;
}

const num1 = 12;
const num2 = 2;

const division = verifyDivision(num1, num2);

console.log(`O número ${num1} é divísível por ${num2}? ${division ? 'Sim' : 'Não'}`);