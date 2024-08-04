function rankingAge(age) {
    if(age < 0) {
        return 'Idade inválida!';
    }

    if(age >= 0 && age < 13)
        return 'Criança';
    else if(age > 12 && age < 18)
        return 'Adolescente';
    else if(age > 17 && age < 60)
        return 'Adulto';
    else 
        return 'Idoso'; 
}

console.log(rankingAge(70));