function Pessoa(nome,email,idade){
	
	var nome = nome || "Ninguem" // se o nome é falso vai para o proximo
	var email = email || "nada@nada.com.br" // inicializando com default
	var idade = idade || 0; // inicializando com 0

	this.falar = function(){
		/*
		if (this === window){
			console.error("***** VIXE *****");
		}else{
			console.error("**** nao é pessoa *****");
		}*/


		console.error(this);
	}

	this.getNome = function(){
		return nome;
	}

	this.setNome = function(meunome){
		nome = meunome;
	}

}