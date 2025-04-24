// 1. Exercício 1 - Saudação Personalizada
function Saudaçao(){
    let name = prompt("Digite seu nome")
    
    alert("Óla, "+ name+"!"+"Seja Bem Vindo")
}
//2. Exercício 2 - Calculadora de Soma
function Calculadora1(){
    let num1 = Number(prompt("Digite um número: "))
    let num2 = Number(prompt("Digite outro número :"))
    let soma = num1 + num2
    alert (`A soma dos dois números é: ${soma}`)
    alert("A soma do dois números é: " + soma)
}
function Calculadora2(){
    let num1 = Number(prompt("Digite um número: "))
    let num2 = Number(prompt("Digite outro número :"))
    let media = (num1 + num2) / 2
    alert("A média dos dois número é: " + media)
}
// 3. Exercício 3 - Conversão de Temperatura (Celsius para Fahrenheit)
function temperatura(){
    let Celsius = Number(prompt("Qual temperatura em Celsius"))
    let resultado = (Celsius * 9/5) + 32
    alert ("temperatura" + resultado)
}
// 4. Exercício 4 - Verificar se um número é par ou ímpar
function parimp(){
    let numero = Number(prompt("Insira um número "))

    if(numero % 2 == 0) alert("Par")
    else alert("Impar")    
}