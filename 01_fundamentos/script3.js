function concatStrings(name, age, city) {
    return 'Name: ' + name + '\n' + 'Age: ' + age + '\n' + 'City: ' + city;
}

const inName = 'Caio';
const inAge = 26;
const inCity = 'Ceilândia';

const concat = concatStrings(inName, inAge, inCity);

console.log(concat);