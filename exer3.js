let n1,n2,n3,n4;
n1 = prompt("Insira o primeiro número:");
n2 = prompt("Insira o segundo número");
n3 = prompt("Insira o terceiro número:");
n4 = prompt("Insira o quarto número:");

n1 = n1 * n1
n2 = n2 * n2
n3 = n3 * n3
n4 = n4 * n4

if(n3 >= 1000){
    alert("O quadrado é maior que 1000!\n" + n3);
}
else {
    alert("O primeiro quadrado é:" +n1+ "\nO segundo quadrado é:" +n2+ "\nO terceiro quadrado é:" + n3 +
     "\nO quarto quadrado é:" + n4);
}

