function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            section.classList.add('active');
        } else {
            section.classList.remove('active');
            section.classList.add('hidden');
        }
    });
}

const perguntas = [
    { pergunta: "Reciclar ajuda o meio ambiente?", resposta: "correta" },
    { pergunta: "Eletrônicos não poluem?", resposta: "incorreta" }
];
let perguntaAtual = 0;

function mostrarPergunta() {
    document.getElementById('pergunta').textContent = perguntas[perguntaAtual].pergunta;
}

function responder(resposta) {
    const resultado = document.getElementById('resultado');
    if (resposta === perguntas[perguntaAtual].resposta) {
        resultado.textContent = "Correto!";
    } else {
        resultado.textContent = "Errado!";
    }
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    setTimeout(() => {
        resultado.textContent = "";
        mostrarPergunta();
    }, 2000);
}

mostrarPergunta();