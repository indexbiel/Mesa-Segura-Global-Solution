const imagens = ["../img/mercado.jpg", "../img/slide2.svg", "../img/slide3.svg"];

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

function mostrarMensagemSucesso(idMensagem, texto) {
    const mensagem = document.getElementById(idMensagem);

    mensagem.textContent = texto;
    mensagem.className = "mensagem sucesso";
}

function mostrarMensagemErro(idMensagem, texto) {
    const mensagem = document.getElementById(idMensagem);

    mensagem.textContent = texto;
    mensagem.className = "mensagem erro";
}

function validarFormularioApoio() {
    const nome = document.getElementById("apoio-nome");
    const email = document.getElementById("apoio-email");
    const telefone = document.getElementById("apoio-tel");
    const cidade = document.getElementById("apoio-cidade");

    let tudoCerto = true;

    if (nome.value.trim() === "") {
        nome.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        nome.classList.remove("campo-invalido");
    }

    if (email.value.trim() === "") {
        email.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        email.classList.remove("campo-invalido");
    }

    if (telefone.value.trim() === "") {
        telefone.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        telefone.classList.remove("campo-invalido");
    }

    if (cidade.value.trim() === "") {
        cidade.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        cidade.classList.remove("campo-invalido");
    }

    return tudoCerto;
}

function validarFormularioMercado() {
    const responsavel = document.getElementById("est-nome");
    const email = document.getElementById("est-email");
    const telefone = document.getElementById("est-tel");
    const cidade = document.getElementById("est-cidade");
    const estabelecimento = document.getElementById("est-estab");
    const tipo = document.getElementById("est-tipo");

    let tudoCerto = true;

    if (responsavel.value.trim() === "") {
        responsavel.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        responsavel.classList.remove("campo-invalido");
    }

    if (email.value.trim() === "") {
        email.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        email.classList.remove("campo-invalido");
    }

    if (telefone.value.trim() === "") {
        telefone.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        telefone.classList.remove("campo-invalido");
    }

    if (cidade.value.trim() === "") {
        cidade.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        cidade.classList.remove("campo-invalido");
    }

    if (estabelecimento.value.trim() === "") {
        estabelecimento.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        estabelecimento.classList.remove("campo-invalido");
    }

    if (tipo.value.trim() === "") {
        tipo.classList.add("campo-invalido");
        tudoCerto = false;
    } else {
        tipo.classList.remove("campo-invalido");
    }

    return tudoCerto;
}

function enviarApoio(event) {
    event.preventDefault();

    const formulario = document.getElementById("form-apoio");
    const formularioValido = validarFormularioApoio();

    if (formularioValido === true) {
        mostrarMensagemSucesso("msg-apoio", "Solicitação registrada. Obrigado pelo interesse!");
        formulario.reset();
    } else {
        mostrarMensagemErro("msg-apoio", "Preencha todos os campos.");
    }
}

function enviarMercado(event) {
    event.preventDefault();

    const formulario = document.getElementById("form-mercado");
    const formularioValido = validarFormularioMercado();

    if (formularioValido === true) {
        mostrarMensagemSucesso("msg-mercado", "Cadastro registrado. Obrigado pelo interesse!");
        formulario.reset();
    } else {
        mostrarMensagemErro("msg-mercado", "Preencha todos os campos.");
    }
}

document.getElementById("slide-proximo").addEventListener("click", proximo);
document.getElementById("slide-anterior").addEventListener("click", anterior);

document.getElementById("form-apoio").addEventListener("submit", enviarApoio);
document.getElementById("form-mercado").addEventListener("submit", enviarMercado);

