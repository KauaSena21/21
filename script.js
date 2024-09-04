const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "quem e o melhor do mundo?",
        alternativas: [
            {
                texto: "cr7",
                afirmacao: "ok"
            },
            {
                texto: "messi",
                afirmacao: "ok"
            }
        ]
    },
    {
        enunciado: "qual o melhor jogador?",
        alternativas: [
            {
                texto: "vini jr.",
                afirmacao: "ok"
            },
            {
                texto: "bellingham",
                afirmacao: "ok"
            }
        ]
    },
    {
        enunciado: "qual o melhor jogador?",
        alternativas: [
            {
                texto: "neymar",
                afirmacao: "ok"
            },
            {
                texto: "griezmann",
                afirmacao: "ok"
            }
        ]
    },
    {
        enunciado: "qual o melhor jogador?",
        alternativas: [
            {
                texto: "neuer",
                afirmacao: "ok"
            },
            {
                texto: "buffon",
                afirmacao: "ok"
            }
        ]
    },
    {
        enunciado: "qual o melhor jogador?",
        alternativas: [
            {
                texto: "busquets",
                afirmacao: "ok"
            },
            {
                texto: "casemiro",
                afirmacao: "ok"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();