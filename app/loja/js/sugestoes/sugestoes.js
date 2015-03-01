$("input[type=button]").click(function(event){
	var inputSugestao = $("input[type=text]");
	var sugestao = inputSugestao.val();
	var nomeSugestao = $("<span>").addClass("votos").text("1 voto");
	var votos = $("<span>").addClass("votos").appendTo(".sugestoes");
	$("<li>").append(nomeSugestao).append(votos).appendTo(".sugestoes");
	inputSugestao.val("").focus();
});

$("input[type=button]").click(function(event){
	var inputSugestao = $("input[type=text]");
	var sugestoes = inputSugestao.val();
	var nomeSugestao = $("<span>").addClass("votos").text("1 voto");
	$("<li>").append(nomeSugestao).append(votos).appendTo(".sugestoes");
	inputSugestao.val("").focus();
});

$(".sugestoes li").dbclick(function(event){
	$(this).remove();
});
