const dataAtual = new Date();
let dataObjetivo = prompt("Data Final: Ano-Mês-Dia (Exemplo: 2024-10-14)");
dataObjetivo = new Date(dataObjetivo + "T23:59:59");
let diasQuefaltam = Math.floor((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias_restantes"). textContent = diasQuefaltam;