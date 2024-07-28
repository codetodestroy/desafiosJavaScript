function toCalculateIMC(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

const inWeight = 85.5;
const inHeight = 1.72;

const imc = toCalculateIMC(inWeight, inHeight)

console.log(`O IMC para o peso ${inWeight}kg e altura ${inHeight} é ${imc}`);