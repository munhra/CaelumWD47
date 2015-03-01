function obterNumerosDaString(frase){
	var padrao = /\d+/g;
	return frase.match(padrao);
}

function soma(frase){
	var numeros = obterNumerosDaString(frase);
	var soma = 0;


	for (var i = 0; i < numeros.length; i++) {
		soma+=parseInt(numeros[i]);
	};

	return soma;
}

function calcula(frase){

	
	frase = frase.replace("mais","+");
	frase = frase.replace("menos","-");
	frase = frase.replace("vezes","*");

	return eval(frase);

	/*
	var operacaoMais = /mais/i;
	var operacaoMenos = /menos/i;
	var operacaoVezes = /mais/i;

	var mais = frase.match(operacaoMais);
	var menos = frase.match(operacaoMenos);
	var vezes = frase.match(operacaoVezes);




	if (mais) {

	};

	if (menos) {

	};

	if (vezes) {

	};*/


}

