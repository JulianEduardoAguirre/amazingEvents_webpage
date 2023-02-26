
function generar_tarjetas_futuro(data){
	let html_tarjetas = `<div class="row mt-5 justify-content-around mb-5">`;
	for (const evento of data.events) {

		let html_boton = isPast(new Date(data.currentDate), new Date(evento.date));

	
		if(data.currentDate < evento.date) {
			html_tarjetas += `<div class="col-xs-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3 mb-4 d-flex justify-content-center">
			<div class="card h-100">
				<img src="${evento.image}" class="card-img-top" alt="${evento.name} image">
				<div class="card-body">
				<h5 class="card-title">${evento.name}</h5>
				<p class="card-price"><small>${evento.date}</small></p>
				<hr>
				<p class="card-text mb-2">${evento.description}</p>
				<p class="card-price mt-0"><small>Price: $${evento.price}</small></p>
				</div>
				<div class="card-footer">
				${html_boton}
			</div>
			</div>
		</div>
		`
		}


	}
	html_tarjetas += `</div>`
	return html_tarjetas;
}


// Contenedor de tarjetas
const div_tarjetas = document.getElementById("cartas");
//Si tiene contenido, lo elimino primero
while(div_tarjetas.firstChild) {
					div_tarjetas.removeChild(div_tarjetas.firstChild);
			}

div_tarjetas.innerHTML = generar_tarjetas_futuro(data);


// function isFuture (fecha1, fecha2) {
// 	let html_boton = '<a href="./details.html" class="btn btn-outline-secondary">View Details</a>'
// 	if (fecha1 < fecha2){
// 		html_boton = '<a href="./details.html" class="btn btn-outline-info">View Details</a>'
// 	}

// 	return html_boton;
// }