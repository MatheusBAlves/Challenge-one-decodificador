const inputTexto = document.querySelector(".texto-entrada");
const mensagem = document.querySelector(".mensagem");

const mensagemNula = document.querySelector(".sem-mensagem");
const comMensagem = document.querySelector(".div-aparece");

function btnCriptografar() {
    if (inputTexto.value.length == 0) {
        semMensagem();
    }
    else {
        comMensagem.classList.remove('desaparece');
        mensagemNula.classList.add('desaparece');
        const textoEncriptado = encriptar(inputTexto.value);
        mensagem.value = textoEncriptado;
    }
}

function semMensagem() {
    comMensagem.classList.add('desaparece');
    mensagemNula.classList.remove('desaparece');
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDescriptografar() {
    if (inputTexto.value.length == 0) {
        semMensagem();
    }
    else {
        comMensagem.classList.remove('desaparece');
        mensagemNula.classList.add('desaparece');
        const textoDesencriptado = desencriptar(inputTexto.value);
        mensagem.value = textoDesencriptado;
    }
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(mensagem.value)
}