// Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5)

let NotaUm, NotaDois, NotaTres
let media

NumeroUm= Number(prompt('Digite a primeira nota: '))
NumeroDois= Number(prompt('Digite a segunda nota: '))
NumeroTres= Number(prompt('Digite a terceira nota: '))

    media = (NumeroUm + NumeroDois + NumeroTres) /3 
    

if(media >= 7){

    alert('Aprovado! essa é a sua média: ' +media)


} else if(media <= 7 || media >= 5){

    alert('Reprovado! essa é a sua média: ' +media)

}

else(media <= 5){

    alert('Reprovado!')

}