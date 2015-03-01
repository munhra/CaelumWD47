/*
var inputs = document.querySelectorAll("#carrinho input");
console.log("Carrinho !!!! "+inputs.length);




for (var i=0 ; i < inputs.length ; i++){
	inputs[i].addEventListener("input",function(event){

		console.log(inputs.length);
		var naoNumericos = /\D/g;

		if (naoNumericos.test(this.value)) {
			this.value = this.value.replace(naoNumericos,"");
		}
	});

} */


var ul = document.querySelector("#carrinho");

ul.addEventListener("input",function(event){


	$origem = event.target;
	var naoNumericos = /\D/g;
	
	if ($origem.tagName == "INPUT"){
		console.log("Change number");
		//$origem.value.replace(naoNumericos,"");
		$origem.value = $origem.value.replace(naoNumericos,"");
	}
	

});