function soma(n1,n2){
    return n1+n2;
}
var validar = 0 ;

function validaIdade(idade){
    if(idade >= 18){
      validar = true;
    }else{
        validar=false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5,10));



/*
var d = new Date();
alert(d);
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;

for (count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};

*/


/*
var idade = prompt("Qual sua idade");

    if(idade >= 21){
        alert("maior de idade");
    }else{
        alert("menor de idade");
    };


*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas.cor);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça" , "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


/*
var nome = "Marcos";
var n1 = 5
var n2 = 3;
var frase = "Japão é o melhor time do mundo"
//alert( nome +" tem " + idade + "  anos");
//alert (idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toL); 
//alert(frase.replace("Japão", "Brasil")); // Aqui esta sendo substituido o Japão pelo Brasil.
*/