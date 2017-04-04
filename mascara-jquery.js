$(function(){
	$("#data").keyup(function(){
		var valor = $(this).val();
		var regex = /[0-9]/;
		if(!regex.test(valor)) $(this).val("");
		if(valor.length == 2){
			valor+= "/";
			$(this).val(valor);
		}
		if(valor.length == 5){
			valor+= "/";
			$(this).val(valor);
		}
		if(valor.length >= 10){
			$(this).val(valor.slice(0,10));
		}
	});

	$("#cpf").keyup(function(){
		var valor = $(this).val();
		var regex = /[0-9]/;
		if(!regex.test(valor)) $(this).val("");
		if(valor.length == 3){
			valor+= ".";
			$(this).val(valor);
		}
		if(valor.length == 7){
			valor+= ".";
			$(this).val(valor);
		}
		if(valor.length == 11){
			valor+= "-";
			$(this).val(valor);
		}
		if(valor.length >= 14){
			$(this).val(valor.slice(0,14));
		}
	});

	$("#cep").keyup(function(){
		var valor = $(this).val();
		var regex = /[0-9]/;
		if(!regex.test(valor)){
			$(this).val("");
		}
		if(valor.length == 5){
			valor+= "-";
			$(this).val(valor);
		}
		if(valor.length >= 10){
			$(this).val(valor.slice(0,9));
		}
	});

	$("#telefone").keyup(function(){
		var valor = $(this).val();
		var regex = /[0-9]/;
		if(!regex.test(valor)){
			$(this).val("");
		}
		if(valor.length == 1 && valor != "("){
			$(this).val("("+valor);
		}
		if(valor.length == 3){
			valor+= ")";
			$(this).val(valor);
		}
		if(valor.length == 4){
			valor+= " ";
			$(this).val(valor);
		}
		if(valor.length == 9){
			valor+= "-";
			$(this).val(valor);
		}
		if(valor.length >= 14){
			$(this).val(valor.slice(0,14));
		}
		
	});

	$("#telefone_celular").keyup(function(){
		var valor = $(this).val();
		var regex = /[0-9]/;
		if(!regex.test(valor)){
			$(this).val("");
		}
		if(valor.length == 1 && valor != "("){
			$(this).val("("+valor);
		}
		if(valor.length == 3){
			valor+= ")";
			$(this).val(valor);
		}
		if(valor.length == 4){
			valor+= " ";
			$(this).val(valor);
		}
		if(valor.length == 10){
			valor+= "-";
			$(this).val(valor);
		}
		if(valor.length >= 15){
			$(this).val(valor.slice(0,15));
		}
	});
});