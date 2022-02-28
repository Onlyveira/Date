const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();
const hora = zeroAEsquerda(data.getHours());
const minutos = zeroAEsquerda(data.getMinutes());

function getWeekText(diaSemana){
const Semana = ['Domingo', 'Segunda-Feira', 'Terça-feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
 return Semana[diaSemana];
};

function RecieveMonth(mes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',  'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes];
};

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
};

function innerHTML(){
    const resultado = document.getElementById('h1');
    resultado.innerHTML = `${getWeekText(diaSemana)}, ${data.getDate()} de ${RecieveMonth(mes)} de ${data.getFullYear()} <br> ${hora}:${minutos}`;
};

innerHTML();

var toExactMinute = 60000 - (new Date().getTime() % 60000);
setTimeout(() => {window.location.reload(true) }, toExactMinute);