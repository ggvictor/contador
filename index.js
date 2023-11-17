let reduizirButton = document.getElementById('reduzir');
let aumentarButton = document.getElementById('aumentar');
let limparButton = document.getElementById('limpar');
let numberElement = document.getElementById('number');
let contador = 0;
function aumentarContador(){
    contador++;
    atualizaNumero()
    
}
function reduizir(){
    contador --;
    atualizaNumero()
}
function limpar(){
    contador =0;
    atualizaNumero()
}
function atualizaNumero(){
    numberElement.textContent= contador;
}

aumentarButton.addEventListener('click' ,aumentarContador)
reduizirButton.addEventListener('click', reduizir)
limparButton.addEventListener('click' ,limpar)