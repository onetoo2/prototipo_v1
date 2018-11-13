function navegar(liga){
	location.assign(liga)
}

function navegarReplace(liga){
	location.replace(liga)
}

function calificarViaje(numEstrellas){
	for (var i = 1; i <= numEstrellas; i++) {
		document.getElementById('estrella'+i).style.color = '#E69E22';
	}

	var restante = 5 - numEstrellas;
	var e;
	for (var j = 1; j <= restante; j++) {
		e = parseInt(numEstrellas) + j;
		document.getElementById('estrella'+e).style.color = '#97BBC3';

	}
}
function prueba(id){
	alert('hola mundo');
}