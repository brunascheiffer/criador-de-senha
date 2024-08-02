  const numerosenha = document.querySelector('parametro-senha__texto');
let tamnhoSenha.textContent = tamanhoSenha12;
numerosenha.textContent = tamnhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onlick = diminuitamanho;
botoes[1].onlick = aumentatamanho;

function diminuiTamanho(){
    if(tamnhoSenha>1){
        tamnhoSenha--;
   
}
numerosenha.textContent = tamnhoSenha;
}
function aumentatamanho(){
    if(tamanhoSenha<20){
    tamanhoSenha++;
    }
    numerosenha.textContent = tamnhoSenha;
} c