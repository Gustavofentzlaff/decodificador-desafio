let mensagemInicial = document.getElementById("inputTexto");
mensagemInicial.addEventListener("click", () => {
if (mensagemInicial.value == 'Digite aqui a sua mensagem.') {
mensagemInicial.value = '';
}
});

mensagemInicial.addEventListener('blur', () => {
if (mensagemInicial.value == '') {
mensagemInicial.value = 'Digite aqui a sua mensagem.';
}
});

function criptografar() {
    let mensagem = document.getElementById("inputTexto").value;

    if (/[A-Z\u00C0-\u017F]/.test(mensagem)) {
    document.getElementById("textoRespostaParagrafo").innerHTML = "<h1>A mensagem não deve conter letras maiúsculas ou acentos.</h1>";
    return;
    }
    
    mensagem = mensagem.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("textoRespostaParagrafo").innerHTML = `<h1>${mensagem}</h1>`;

    let imagem = document.getElementById("imagemLupa");
    imagem.remove();

    let texto = document.getElementById("textoRespostaTitulo");
    texto.innerHTML = " ";
}

function descriptografar() {
    let mensagem = document.getElementById("inputTexto").value;

    if (/[A-Z\u00C0-\u017F]/.test(mensagem)) {
    document.getElementById("textoRespostaParagrafo").innerHTML = "<h1>A mensagem não deve conter letras maiúsculas ou acentos.</h1>";
    return;
    }
    
    mensagem = mensagem.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("textoRespostaParagrafo").innerHTML = `<h1>${mensagem}</h1>`;

    let imagem = document.getElementById("imagemLupa");
    imagem.remove();

    let texto = document.getElementById("textoRespostaTitulo");
    texto.innerHTML = " ";
}

