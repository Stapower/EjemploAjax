
function MostrarError()
{
  /*
    var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);
	});
 */

 	$.ajax({url:"NoExiste.PHP"}).then(function(respuesta){//primero del OK

 		alert("Primero, " + respuesta);
 		console.info("Primero, " + respuesta);

 	},function(error){ //el segundo es el error

 		alert("segundo, " + error);
 		console.info(error);

 		//var funcionAjax=$.ajax({url:"error.php"});

	//funcionAjax.error(function(error){
		$("#principal").html(error);
		$("#informe").html("EEERRROOOORRR!!!");
	});

 //<--funcion que devuelve retornos "pallback", ajax se hizo para hacer una consulta y esperar el resultado, trae el error o va a traer lo que nos devuelva el sv como texto de servidor
 			 //me puedo comunicar con el base de datos, con una api
 			 //dentro del then recibe 2 callbacks, se disparará then cuando vuelva con datos o sin
}
function MostrarSinParametros()
{
  /*
	var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
  */

  $.ajax({url:"nexoTexto.php"}).then(function(respuesta)
	{

	$("#principal").html(respuesta);

	},function()
	{
		setTimeout(function() {}, 4);
	});
setTimeout(function() {}, 4);
}

function Mostrar(queMostrar)
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});



}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});


	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}