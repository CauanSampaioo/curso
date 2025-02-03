
let listaDeNumerosSorteados = [];
let numeroLimite = 100;

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibir(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;     
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function limparCampo()
{    
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibir('h1', 'Jogo do número secreto');
    exibir('p', 'Ecolha um número entra 1 e 100');
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas=1;
console.log(numeroSecreto);

exibirMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : "tentativa";
        exibir('p', 'Você acertou o número secreto = '+ numeroSecreto + " na "+ tentativas + " "+palavraTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
        exibir('p', 'Você chutou um número maior');
    } else {
        exibir('p', 'Você chutou um número menor');
    }

    tentativas++;
    limparCampo();
}

