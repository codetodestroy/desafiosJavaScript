function calculateTicket(categoria, idade) {
    const ticketPrice = 2.50;
    let discount = 0;

    if(categoria === 'crianca' && idade <= 6)
        return 0;
    else if(categoria === 'estudante') 
        discount = 0.5;
    else if(categoria === 'idoso' && idade >= 60) 
        discount = 0.3;

    return (ticketPrice - (ticketPrice * discount)).toFixed(2);
} 

console.log(calculateTicket('crianca', 8));