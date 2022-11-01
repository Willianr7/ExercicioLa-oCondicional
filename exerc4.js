let numero
numero= prompt("Insira um número inteiro:");

if(numero % 2 == 0 && numero < 0){
    alert("O número inserido é par e negativo");
}
else if(numero % 2 == 0 && numero >= 0){
    alert("O número inserido é par e positivo");
}
else if(numero % 2 != 0 && numero <= 0){
    alert("O número inserido é ímpar e negativo");
}
else if(numero % 2 != 0 && numero > 0){
    alert("O número inserido é ímpar e positivo");
}