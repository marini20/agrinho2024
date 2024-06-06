// Conectar elementos HTML ao JavaScript
const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');

// Organizar perguntas e respostas usando arrays e objetos
const perguntas = [
    {
        enunciado: "Qual é a linguagem de programação mais popular do mundo?",
        opcoes: ["JavaScript", "Python", "Java", "C"],
        respostaCorreta: 0
    },
    {
        enunciado: "Qual é o símbolo usado para comentários em JavaScript?",
        opcoes: ["//", "/* */", "#", "--"],
        respostaCorreta: 0
    },
    {
        enunciado: "Qual é o método em JavaScript usado para adicionar um elemento ao final de um array?",
        opcoes: ["push()", "append()", "addToEnd()", "insert()"],
        respostaCorreta: 0
    }
];

// Função para exibir uma pergunta
function exibirPergunta(indice) {
    const perguntaAtual = perguntas[indice];
    perguntaElemento.textContent = perguntaAtual.enunciado;
    
    opcoesElemento.innerHTML = '';

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.addEventListener('click', () => {
            verificarResposta(index, indice);
        });
        opcoesElemento.appendChild(botao);
    });
}

// Função para verificar a resposta
function verificarResposta(indiceResposta, indicePergunta) {
    if (indiceResposta === perguntas[indicePergunta].respostaCorreta) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }
}

// Iniciar o quiz
exibirPergunta(0);
// Declaração de variáveis
const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');
let indicePerguntaAtual = 0;

// Array de perguntas e respostas
const perguntas = [
    {
        enunciado: "Qual é a principal cultura agrícola do Brasil?",
        opcoes: ["Milho", "Soja", "Café", "Arroz"],
        respostaCorreta: 1
    },
    {
        enunciado: "Qual destes é um adubo orgânico comum?",
        opcoes: ["NPK", "Uréia", "Hidrogel", "Esterco"],
        respostaCorreta: 3
    },
    {
        enunciado: "Qual é o processo de transformação de vapor de água em água líquida?",
        opcoes: ["Condensação", "Evaporação", "Sublimação", "Solidificação"],
        respostaCorreta: 0
    }
];

// Função para exibir uma pergunta
function exibirPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    perguntaElemento.textContent = perguntaAtual.enunciado;

    opcoesElemento.innerHTML = '';

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.addEventListener('click', () => {
            verificarResposta(index);
        });
        opcoesElemento.appendChild(botao);
    });
}

// Função para verificar a resposta
function verificarResposta(indiceResposta) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    if (indiceResposta === perguntaAtual.respostaCorreta) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }

    // Passa para a próxima pergunta
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        alert('Fim do Quiz!');
    }
}

// Iniciar o quiz
exibirPergunta();
// Declaração de variáveis
const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');
let indicePerguntaAtual = 0;

// Array de perguntas e respostas
const perguntas = [
    {
        enunciado: "Qual é a principal cultura agrícola do Brasil?",
        opcoes: ["Milho", "Soja", "Café", "Arroz"],
        respostaCorreta: 1
    },
    {
        enunciado: "Qual destes é um adubo orgânico comum?",
        opcoes: ["NPK", "Uréia", "Hidrogel", "Esterco"],
        respostaCorreta: 3
    },
    {
        enunciado: "Qual é o processo de transformação de vapor de água em água líquida?",
        opcoes: ["Condensação", "Evaporação", "Sublimação", "Solidificação"],
        respostaCorreta: 0
    }
];

// Função para exibir uma pergunta
function exibirPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    perguntaElemento.textContent = perguntaAtual.enunciado;

    // Limpa as opções anteriores
    opcoesElemento.innerHTML = '';

    // Cria botões para cada opção
    perguntaAtual.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.addEventListener('click', () => {
            verificarResposta(index);
        });
        opcoesElemento.appendChild(botao);
    });
}

// Função para verificar a resposta
function verificarResposta(indiceResposta) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    if (indiceResposta === perguntaAtual.respostaCorreta) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }

    // Passa para a próxima pergunta
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        alert('Fim do Quiz!');
    }
}

// Iniciar o quiz
exibirPergunta();const quiz = [
    {
        pergunta: "Qual é a principal cultura agrícola do Brasil?",
        alternativas: ["Milho", "Soja", "Café", "Arroz"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual destes é um adubo orgânico comum?",
        alternativas: ["NPK", "Uréia", "Hidrogel", "Esterco"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual é o processo de transformação de vapor de água em água líquida?",
        alternativas: ["Condensação", "Evaporação", "Sublimação", "Solidificação"],
        respostaCorreta: 0
    }
];
const opcoesElemento = document.getElementById('opcoes');
let indicePerguntaAtual = 0;

function exibirPergunta() {
    const perguntaAtual = quiz[indicePerguntaAtual];
    perguntaElemento.textContent = perguntaAtual.pergunta;

    opcoesElemento.innerHTML = '';

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => {
            verificarResposta(index);
        });
        opcoesElemento.appendChild(botao);
    });
}

function verificarResposta(indiceResposta) {
    const perguntaAtual = quiz[indicePerguntaAtual];
    if (indiceResposta === perguntaAtual.respostaCorreta) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }

    indicePerguntaAtual++;
    if (indicePerguntaAtual < quiz.length) {
        exibirPergunta();
    } else {
        alert('Fim do Quiz!');
    }
}

exibirPergunta();
const opcoesElemento = document.getElementById('opcoes');
let indicePerguntaAtual = 0;
let historiaFinal = "";

const quiz = [
    {
        pergunta: "Qual é a principal cultura agrícola do Brasil?",
        alternativas: ["Milho", "Soja", "Café", "Arroz"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual destes é um adubo orgânico comum?",
        alternativas: ["NPK", "Uréia", "Hidrogel", "Esterco"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual é o processo de transformação de vapor de água em água líquida?",
        alternativas: ["Condensação", "Evaporação", "Sublimação", "Solidificação"],
        respostaCorreta: 0
    }
];

const exibirPergunta = () => {
    const perguntaAtual = quiz[indicePerguntaAtual];
    perguntaElemento.textContent = perguntaAtual.pergunta;

    opcoesElemento.innerHTML = '';

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => {
            verificarResposta(index);
        });
        opcoesElemento.appendChild(botao);
    });
}

const verificarResposta = (indiceResposta) => {
    const perguntaAtual = quiz[indicePerguntaAtual];
    const alternativaSelecionada = perguntaAtual.alternativas[indiceResposta];
    historiaFinal += `Pergunta: ${perguntaAtual.pergunta}\n`;
    historiaFinal += `Resposta escolhida: ${alternativaSelecionada}\n`;

    if (indiceResposta === perguntaAtual.respostaCorreta) {
        historiaFinal += "Você acertou!\n\n";
    } else {
        historiaFinal += `Você errou! A resposta correta era: ${perguntaAtual.alternativas[perguntaAtual.respostaCorreta]}\n\n`;
    }

    indicePerguntaAtual++;
    if (indicePerguntaAtual < quiz.length) {
        exibirPergunta();
    } else {
        historiaFinal += "Fim do Quiz!";
        alert(historiaFinal);
    }
}

exibirPergunta();
const opcoesElemento = document.getElementById('opcoes');
let indicePerguntaAtual = 0;
let historiaFinal = "";

const quiz = [
    {
        pergunta: "Qual é a principal cultura agrícola do Brasil?",
        alternativas: ["Milho", "Soja", "Café", "Arroz"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual destes é um adubo orgânico comum?",
        alternativas: ["NPK", "Uréia", "Hidrogel", "Esterco"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual é o processo de transformação de vapor de água em água líquida?",
        alternativas: ["Condensação", "Evaporação", "Sublimação", "Solidificação"],
        respostaCorreta: 0
    }
];

const exibirPergunta = () => {
    if (indicePerguntaAtual < quiz.length) {
        const perguntaAtual = quiz[indicePerguntaAtual];
        perguntaElemento.textContent = perguntaAtual.pergunta;

        opcoesElemento.innerHTML = '';

        perguntaAtual.alternativas.forEach((alternativa, index) => {
            const botao = document.createElement('button');
            botao.textContent = alternativa;
            botao.addEventListener('click', () => {
                verificarResposta(index);
            });
            opcoesElemento.appendChild(botao);
        });
    } else {
        mostraResultado();
    }
}

const verificarResposta = (indiceResposta) => {
    const perguntaAtual = quiz[indicePerguntaAtual];
    const alternativaSelecionada = perguntaAtual.alternativas[indiceResposta];
    historiaFinal += `Pergunta: ${perguntaAtual.pergunta}\n`;
    historiaFinal += `Resposta escolhida: ${alternativaSelecionada}\n`;

    if (indiceResposta === perguntaAtual.respostaCorreta) {
        historiaFinal += "Você acertou!\n\n";
    } else {
        historiaFinal += `Você errou! A resposta correta era: ${perguntaAtual.alternativas[perguntaAtual.respostaCorreta]}\n\n`;
    }

    indicePerguntaAtual++;
    exibirPergunta();
}

const mostraResultado = () => {
    alert(historiaFinal);
}

exibirPergunta();
const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');
const proximoBotao = document.getElementById('proximo');
const resultadoElemento = document.getElementById('resultado');

let indicePerguntaAtual = 0;
let pontuacao = 0;

const quiz = [
    {
        pergunta: "Qual é a principal cultura agrícola do Brasil?",
        alternativas: ["Milho", "Soja", "Café", "Arroz"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual destes é um adubo orgânico comum?",
        alternativas: ["NPK", "Uréia", "Hidrogel", "Esterco"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual é o processo de transformação de vapor de água em água líquida?",
        alternativas: ["Condensação", "Evaporação", "Sublimação", "Solidificação"],
        respostaCorreta: 0
    }
];

function mostraPergunta() {
    const perguntaAtual = quiz[indicePerguntaAtual];
    perguntaElemento.textContent = perguntaAtual.pergunta;

    opcoesElemento.innerHTML = '';

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => {
            verificarResposta(index);
        });
        opcoesElemento.appendChild(botao);
    });
}

function verificarResposta(indiceResposta) {
    const perguntaAtual = quiz[indicePerguntaAtual];

    if (indiceResposta === perguntaAtual.respostaCorreta) {
        pontuacao++;
    }

    indicePerguntaAtual++;

    if (indicePerguntaAtual < quiz.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    perguntaElemento.style.display = 'none';
    opcoesElemento.style.display = 'none';
    proximoBotao.style.display = 'none';

    const porcentagem = (pontuacao / quiz.length) * 100;
    let mensagem = `Você acertou ${pontuacao} de ${quiz.length} perguntas. `;

    if (porcentagem === 100) {
        mensagem += "Parabéns! Você acertou todas as perguntas!";
    } else if (porcentagem >= 75) {
        mensagem += "Muito bem! Você foi muito bem!";
    } else if (porcentagem >= 50) {
        mensagem += "Você pode fazer melhor. Continue tentando!";
    } else {
        mensagem += "Você precisa estudar mais. Não desista!";
    }

    resultadoElemento.textContent = mensagem;
    resultadoElemento.style.display = 'block';
}

mostraPergunta();
