function navegar(liga){
	location.assign(liga);
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

function mostrar(elemento){
	elemento.classList.remove('esconder');
	elemento.classList.add('mostrar');
}

function esconder(elemento){
	elemento.classList.remove('mostrar');
	elemento.classList.add('esconder');
}

function mostrarModal(idModal){
	modal = document.getElementById(idModal)
	mostrar(modal);
}

function esconderModal(idModal){
	modal = document.getElementById(idModal)
	esconder(modal);
}

function mostrarModalNotificacion(idModal){
	var modal = document.querySelector('div.modalNotificacion');
	var bandera;
	for (var i = 0; i <= modal.classList.length; i++) {

		if(modal.classList[i] == 'invisible'){
			bandera = 1;
		}
		if(modal.classList[i] == 'visible'){
			bandera = 0;
		}
	}
	if(bandera == 1){
			modal.classList.remove('invisible');
			modal.classList.add('visible');
			setTimeout(mostrarModalNotificacion, 1500);
		}
	if(bandera == 0){
			modal.classList.remove('visible');
			modal.classList.add('invisible');
		}
}


function mostrarPopUp(idPopUp, idModal){
	popUp = document.getElementById(idPopUp)
	mostrar(popUp);
	mostrarModal(idModal);
}

function esconderPopUp(idPopUp, idModal){
	popUp = document.getElementById(idPopUp)
	esconder(popUp);
	esconderModal(idModal);
}

function banderaMostrar(elemento){
	var bandera;
	for (var i = 0; i <= elemento.classList.length; i++) {

		if(elemento.classList[i] == 'esconder'){
			bandera = 1;
		}
		if(elemento.classList[i] == 'mostrar'){
			bandera = 0;
		}
	}
	if(bandera == 1){
			mostrar(elemento);
		}
	if(bandera == 0){
			esconder(elemento);
		}
}

function mostrarMenu(){
	menu = document.querySelector("div.menuDesplegable");
	banderaMostrar(menu);
}


function mostrarHorario(id){
	var id = 'reservar' + id;
	horario = document.getElementById(id);
	banderaMostrar(horario);
}


