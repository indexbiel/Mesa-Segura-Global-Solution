const imagens = ["img/mercado.jpg", "img/slide2.svg", "img/slide3.svg"];

const textosAlt = [
    "Corredor de mercado com frutas e legumes expostos",
    "Ilustração de uma geladeira com alimentos, um sensor e um celular com aplicativo",
    "Ilustração de uma caixa de doação com frutas e um coração"
];

const legendas = [
    "Alimentos bons que podem ser doados antes de virar desperdício.",
    "O sensor monitora o alimento e o aplicativo avisa quem precisa receber.",
    "A doação chega com segurança a instituições e famílias."
];

let posicao = 0;

function trocarImagem() {
    const foto = document.getElementById("slide-img");

    foto.src = imagens[posicao];
}

function trocarTextoAlt() {
    const foto = document.getElementById("slide-img");

    foto.alt = textosAlt[posicao];
}

function trocarLegenda() {
    const legenda = document.getElementById("slide-legenda");

    legenda.textContent = legendas[posicao];
}

function mostrarSlide() {
    trocarImagem();
    trocarTextoAlt();
    trocarLegenda();
}
function proximo() {
    posicao = posicao + 1;

    if (posicao >= imagens.length) {
        posicao = 0;
    }

    mostrarSlide();
}
function anterior() {
    posicao = posicao - 1;

    if (posicao < 0) {
        posicao = imagens.length - 1;
    }

    mostrarSlide();
}
