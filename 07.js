//  Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

let nome, idade, comorbidade

nome = prompt('Digite seu nome: ')
idade = Number(prompt('Digite sua idade: '))
comorbidade = prompt('Possui comorbidade (SIM OU NÃO) ')

if (idade >= 60 || comorbidade == 'SIM'){

    alert('Pode se vacinar!')

}

else if(comorbidade == 'NÃO'){

    alert(+nome+ ' Não pode se vacinar!')

}
