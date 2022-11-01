let excesso, horas, codigo, salario

horas = prompt("Insira o número de horas trabalhadas:");
codigo = prompt("Insira o código:");

salario = (50*10);
excesso = (50*10+20);
if(horas >= 50){
    alert("Você ultrapassou 50 horas de trabalho e receberá o excedente de:" + excesso);
}else if(horas < 50){
    alert("Você teve menos que 50 horas de trabalho e não receberá excedente.")
}
alert("O salário excedente foi de:"+ excesso);
alert("O salário total, sem excedente é de:"+ salario);

