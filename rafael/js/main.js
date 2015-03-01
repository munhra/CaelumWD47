//var numero = 9.9;
//var formatado = numero.toFixed(2);
//formatado = "R$" + formatado;
//formatado = formatado.replace(".",",");

//formatado = "R$"+numero.toFixed(2).replace(".",",");

//console.log(formatado);

//var texto = "R$ 120,35";
//var soNumero = texto.replace("R$","");
//soNumero = soNumero.replace(",",".");
//var valor = parseFloat(soNumero)

//var valor = parseFloat(texto.replace("R$","").replace(",","."));

//console.log("**** Valor ****");
//console.log(valor);

/* desafio */
//var numeroGrande = 10000.5 // virar R$ 10.000,50
//var formatadoGrande = numeroGrande.toFixed(2);
//var pontoInserido = formatadoGrande.substr(0,2) + "." + formatadoGrande.substr(2);
//console.log(pontoInserido);

var formatado = numberParaReal(9.9);
var numero = realParaNumber("R$ 120,35");

console.log(formatado);
console.log(numero);

if (formatado == "R$ 9,90"){
	console.log(formatado + " é o valor esperado");
} else {
	console.log(formatado + " não é o valor esperado");
}

console.log(soma("Quanto é 10 mais 20?"));
console.log(calcula("20 menos 30"));

var ancora = document.querySelector("#a1");
ancora.addEventListener("click", function(event){
	alert(this.text);
	event.preventDefault();
});

