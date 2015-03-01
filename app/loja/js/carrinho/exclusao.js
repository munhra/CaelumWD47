// usando o jquery
$("#carrinho li form a").click(function(event){
	$(this).closest("li").remove();
	event.preventDefault();
});

//javascript (vanillaJS)
//fazer com o data-attribute.