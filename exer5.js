let indice,grupo1,grupo2,grupo3
indice = prompt("Insira um índice de poluição, que varia de 0,05 até 0,25");

if (indice >= 0.05 && indice <= 0.25){
    alert("Índice Normal");
}
else if(indice > 0.25 && indice <= 0.3){
    alert("Empresas do grupo 1, suspendam suas atividades!");
}
else if(indice > 0.3 && indice <= 0.4){
    alert("Empresas do grupo 1 e 2, suspendam suas atividades!");
}
else if(indice <= 0.5 && indice > 0.4){
    alert("Todas as empresas paralisem suas atividades")
}