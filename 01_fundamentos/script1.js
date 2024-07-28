function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5/9;
}

const temperatureInCelsius = 30;
const temperatureInFahrenheit = 86;

console.log(temperatureInCelsius + ' graus Celsius é igual a ' + celsiusToFahrenheit(temperatureInCelsius) + ' graus Fahrenheit.');
console.log(temperatureInFahrenheit + ' graus Fahrenheit é igual a ' + fahrenheitToCelsius(temperatureInFahrenheit) + ' graus Celsius.');