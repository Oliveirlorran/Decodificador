const textArea = document.querySelector('.area__texto');
const mensagem = document.querySelector('.mensagem');
const botaoCopiar = document.querySelector('.botao__copiar');
let alterarTelaAtiva = true;

function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";

    if (alterarTelaAtiva) {
        alterarTela();
    }
}

function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";

    if (alterarTelaAtiva) {
        alterarTela();
    }
}

function copiarTexto() {
    mensagem.select(); 
    document.execCommand('copy');
    mensagem.value = "";
    mensagem.blur();
    alterarTelaAtiva = false;
    restaurarTela();
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    
    stringCriptografada = stringCriptografada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringCriptografada;
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [
        ['enter', 'e'],
        ['imes', 'i'],
        ['ai', 'a'],
        ['ober', 'o'],
        ['ufat', 'u']
    ];
    
    stringDescriptografada = stringDescriptografada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografada.includes(matrizCodigo[i][0])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringDescriptografada;
}

function alterarTela() {
    document.querySelector('.primeira__orientacao').style.display = 'none';
    document.querySelector('.segunda__orientacao').style.display = 'none';

    let pesquisadora = document.querySelector('.pesquisadora');
    if (pesquisadora) {
        pesquisadora.style.display = 'none';
    }

    let botaoCopiar = document.querySelector('.botao__copiar');
    botaoCopiar.style.visibility = 'visible';
    botaoCopiar.style.pointerEvents = 'auto';
}

function restaurarTela() {
    document.querySelector('.primeira__orientacao').style.display = 'block';
    document.querySelector('.segunda__orientacao').style.display = 'block';

    let pesquisadora = document.querySelector('.pesquisadora');
    if (pesquisadora) {
        pesquisadora.style.display = 'block';
    }

    let botaoCopiar = document.querySelector('.botao__copiar');
    botaoCopiar.style.visibility = 'hidden';
    botaoCopiar.style.pointerEvents = 'none';

    alterarTelaAtiva = true;
}

botaoCopiar.addEventListener('click', copiarTexto);
