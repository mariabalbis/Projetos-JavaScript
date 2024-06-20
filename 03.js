// Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

let numeroUm
let numeroDois

numeroUm = Number(prompt('Digite o primeiro número: '))
numeroDois = Number(prompt('Digite o segundo número: '))

if(numeroUm > numeroDois){

    alert('O seu primeiro número ' +numeroUm+ ' é maior que o segundo ' +numeroDois)

}

else if(numeroDois > numeroUm){

    alert('O segundo número ' +numeroDois+ ' é maior que o primeiro ' +numeroUm)

}

else if(numeroUm == numeroDois){

    alert('Os números são iguais')

}
