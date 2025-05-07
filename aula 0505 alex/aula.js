//1. Mostre apenas os números pares de 1 a 20.
function Par(){
let numero = 1
 while(numero <= 20){
     let resto = numero % 2
     if(resto === 0) alert("Número: " + numero + " é Par")
     numero++
 }
}
//2. Mostre apenas os números ímpares de 1 a 20.
function Ímpar(){
let numero = 1
while(numero <= 20){
    let resto = numero % 2
    if(resto != 0) alert("Número: " + numero + " é Ímpar")
    numero++
 }
} 
//3. Imprima “Olá, mundo!” 5 vezes.
function ólamundo(){
    let frase = 1
    while(frase <= 5) {
        alert("Óla Mundo!")
    frase++
    }
}
//4. Conte de 0 a 50 pulando de 5 em 5.
function Contagem(){
    let contar = 0
    
    while(contar <= 50 ){

    alert(contar)
      contar = contar + 5

    }    
}