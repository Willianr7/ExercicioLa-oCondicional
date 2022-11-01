let peso, excesso, zero;

peso = prompt("Insira o peso do tomate:");
excesso = (peso-50)*4

if(peso > 50){
    alert("Peso maior que o estabelecido pelo regulamento, deverá pagar a multa de:" + excesso);
}
else if(peso <= 50){
    alert("Como o peso é menor que 50kg, não precisará pagar multa");
}