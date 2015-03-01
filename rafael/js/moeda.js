//var numero = 9.9;
//var formatado = numero.toFixed(2);
//formatado = "R$" + formatado;
//formatado = formatado.replace(".",",");

//var formatado = "R$"+numero.toFixed(2).replace(".",",");

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


function numberParaReal(numero){
	return "R$ "+numero.toFixed(2).replace(".",",");	
}

function realParaNumber(texto){	
	return parseFloat(texto.replace("R$","").replace(",","."));
}

