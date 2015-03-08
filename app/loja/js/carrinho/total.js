
var inputs = document.querySelectorAll("#carrinho input");

for (var i = 0; i < inputs.length ; i ++) {
	inputs[i].addEventListener("input",function(event){
		var input = this;
		var li = input.parentNode.parentNode.parentNode;
		var spans = li.querySelectorAll("span");
		var spanValorUnitario = spans[0];
		console.log(spanValorUnitario.textContent);
		var spanValorTotal = spans[1];
		var quantidade = input.value;
		
		
		var valorUnitario = formatadorMoeda.realParaNumber(spanValorUnitario.textContent);
		var novoTotal = quantidade * valorUnitario;
		spanValorTotal.textContent = formatadorMoeda.numberParaReal(novoTotal);
		console.log(novoTotal);
	});
};

//usar o data-dubpla para marcar um id igual para o input e para o span que vai
//mostrar o valor e ai usar o querySelectorAll("[data-dupla='furlan'"]")

/*
var $carrinho = document.querySelector("#carrinho");

$carrinho.addEventListener("input",function(event){

	qtd = event.target.value;

	var $elements = document.querySelectorAll('[data-dupla = "'+event.target.getAttribute("data-dupla")+'"]');
	elements[2].textContent = elements[0] * qtd;


});
*/



