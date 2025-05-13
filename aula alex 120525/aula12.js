//idade minima =>
function idade(){
    let idademinima = 0 
    let aceitoutermo = false

while((aceitoutermo == false )|| ( idademinima < 18)){
    idademinima = Number (prompt("Qual a sua Idade? "))
    let resposta = prompt("Aceita o termo? Sim ou Não")
    if(resposta === "Sim") aceitoutermo = true
    else aceitoutermo = false
}
}

if (aceitoutermo === true && idademinima > 18){
    alert("Entrou no codigo")
}

alert("Você está inscrito!")



//TABELA VERDADE E (&&)
//false && false => false
//false && true => false 
//true && false => false 
//true && true => true 

// TABELA VERDADE OU (||)
// false || false => false 
// false || true => true 
// true || false => true
// true || true => true 

//Exibe números múltiplos de 2 e 3 ou que sejam 25.


function doisetres(){
let resultado = ''
for ( let contador = 0; contador <= 100; contador++){
    if (contador % 2 == 0
    || contador % 3 == 0
    || contador == 25) {
        resultado += contador + ', '
    alert ("Numero atende a regra" + contador)
    }
  }
}

