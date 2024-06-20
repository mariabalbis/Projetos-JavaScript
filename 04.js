//  Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let salario
let AnosDeServiço
var TotalBonus
var bonus

salario= Number(prompt('Digite qual o seu salário: '))
AnosDeServiço= Number(prompt('Digite quantos anos de serviço você tem: '))

if(AnosDeServiço >= 5){

    bonus = salario * 0.05

    alert('Esse é o bonus que você vai receber: ' +bonus)

}