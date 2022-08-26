const inputPergunta1 = document.querySelector('#inputPergunta1');
const inputPergunta2 = document.querySelector('#inputPergunta2');
const pergunta = document.querySelector('#pergunta');
const resposta = document.querySelector('#resposta');
const btnVerificar = document.querySelector('#btn');

const respostas = [
    "Certeza!",
    "Com facilidade.",
    "Com dificuldade.",
    "Vai ter goleada, mas não vou falar pra quem.",
    "Vai dar empate",
    "Seu time vai golear!",
    "Empate!",
    "Vai ganhar!",
    "Jogo difícil, mas seu time vai ganhar!",
    "Jogo difícil, e seu time vai perder!",
    "Mais 3 pontos!",
    "Seu time vai perder!",
    "Seu time vai ganhar!",
  ]

function verificar() {

    if (inputPergunta1.value == '' || inputPergunta2.value == '' || inputPergunta1.value == inputPergunta2.value) {

        resposta.textContent = 'Preencha os campos com dois times diferentes.';
        
        setTimeout(() => {
            resposta.textContent = '';
        }, 3000);
        
        return
    }

    // gerando um número aleatório
    const totalRespostas = respostas.length;
    
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
    
    pergunta.innerHTML = `${inputPergunta1.value} x ${inputPergunta2.value}`;

    resposta.innerHTML = respostas[numeroAleatorio];
    
    setTimeout(function() {

        resposta.textContent = '';
        pergunta.textContent = '';
        inputPergunta1.value = '';
        inputPergunta2.value = '';

    }, 3000);

}

btnVerificar.addEventListener('click', verificar);