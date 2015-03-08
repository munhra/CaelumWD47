var painel = $("#recomendacoes");

function requisicao(){

	$.getJSON("http://mirrorfashion.caelum.com.br/produtos?callback=?",function(retorno){

		var ul = $("<ul>");

		$.each(retorno.produtos,function(){

			var li = $("<li>");
			var img = $("<img>").attr("src",this.imagem);
			var pNome = $("<p>").text(this.nome);
			var pPreco = $("<p>").text(numberParaReal(this.preco));
			li.append(img).append(pNome).append(pPreco).appendTo(ul);

		});


		//seletor contextualizado, é
		//seleciona a ul do painel

		$("ul",painel).remove();
		ul.appendTo(painel);

	});
}

requisicao();
setInterval(function(){
	requisicao();
}, 5000);



