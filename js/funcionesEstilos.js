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

function mostrarMenu(){
	menu = document.querySelector("div.menuDesplegable");
	var bandera;
	for (var i = 0; i <= menu.classList.length; i++) {

		if(menu.classList[i] == 'esconder'){
			bandera = 1;
		}
		if(menu.classList[i] == 'mostrar'){
			bandera = 0;
		}
	}
	if(bandera == 1){
			menu.classList.remove('esconder');
		    menu.classList.add('mostrar');
		}
	if(bandera == 0){
			menu.classList.remove('mostrar');
			menu.classList.add('esconder');
		}
}

function mostrarHorario(id){
	var id = 'reservar' + id;
	horario = document.getElementById(id);
	var bandera;
	for (var i = 0; i <= horario.classList.length; i++) {

		if(horario.classList[i] == 'esconderHorario'){
			bandera = 1;
		}
		if(horario.classList[i] == 'mostrarHorario'){
			bandera = 0;
		}
	}
	if(bandera == 1){
		horario.classList.remove('esconderHorario');
		horario.classList.add('mostrarHorario');
	}
	if(bandera == 0){
		horario.classList.remove('mostrarHorario');
		horario.classList.add('esconderHorario');
	}
}


