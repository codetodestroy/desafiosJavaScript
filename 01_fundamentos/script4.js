function toCalculateArea(length, width) {
    return length * width;
}

function toCalculatePerimeter(length, width) {
    return 2 * (length + width);
}

const inLength = 10;
const inWidth = 5;

const area = toCalculateArea(inLength, inWidth);
const perimeter = toCalculatePerimeter(inLength, inWidth);

console.log(`A área do retângulo é de ${area} e o perímetro é de ${perimeter}`);