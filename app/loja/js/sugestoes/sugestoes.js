$("input[type=button]").click(function(event){
	var inputSugestao = $("input[type=text]");
	var sugestao = inputSugestao.val();
	var nomeSugestao = $("<span>").addClass("sugestao").text(sugestao);
	var votos = $("<span>").addClass("votos").text("1 voto");
	$("<li>").append(nomeSugestao).append(votos).appendTo(".sugestoes");
	inputSugestao.val("").focus();
});

$(".sugestoes").on("dbclick","li",function(event) {
		$(this).remove();
});

/*
$("input[type=button]").click(function(event){
	var inputSugestao = $("input[type=text]");
	var sugestoes = inputSugestao.val();
	var nomeSugestao = $("<span>").addClass("votos").text("1 voto");
	$("<li>").append(nomeSugestao).append(votos).appendTo(".sugestoes");
	inputSugestao.val("").focus();
});*/

