$("<button>").attr("id","botaoaviso")
             .text("Esconder")
             .prependTo("#principal")
             .click(function(event){
             	var div = $(this).next();
             	div.toggle();

             	if(div.is(":visible")){
             		$(this).text("Aviso");
             	}else{
             		$(this).text("Esconder");
             	}

             });