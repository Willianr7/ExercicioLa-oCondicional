let base, altura, triangulo;
base = prompt("Insira a base do triângulo:");
altura = prompt("Insira a altura do triângulo:");

triangulo = (base*altura/2);

if(base >0 && altura >0){
    alert(`A área do triangulo é: ${triangulo}`);
}else{
    alert("Insira números positivos maiores que zero para ser calculado a área do triângulo.")
}
