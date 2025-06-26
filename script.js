const numeroSenha = document.querySelector(".parametro-senha__texto")
let tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha
const botoes = document.querySelectorAll(".parametro-senha__botao")
const checkbox = document.querySelectorAll("parametro-senha_botao")
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'
const letrasMinusculas ='abcdefghijklmnopqrstuvxywz'
const numeros = '0123456789'
const simbolos = '!@%*?'
function diminuiTamanho(){
    if(tamanhoSenha>1){
        tamanhoSenha --
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha()

}
botoes[0].onclick = diminuiTamanho

function aumentaTamanho(){

    if(tamanhoSenha<20){
        tamanhoSenha ++
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha()

}
   
botoes[1].onclick = aumentaTamanho

const campoSenha = document.querySelector('#campo-senha')

function geraSenha(){
    let senha = ''
    for(let i =0; i< tamanhoSenha; i++){

        let numeroAleatorio = Math.random()*letrasMaiusculas.length
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.value = senha 
}
