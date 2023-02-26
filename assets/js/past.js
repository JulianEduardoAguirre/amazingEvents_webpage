function generar_tarjetas_pasado(data){
	let html_tarjetas = `<div class="row mt-5 justify-content-around mb-5">`;
	
	for (const evento of data.events) {

		let btnClass = buttonClassSelector(new Date(data.currentDate), new Date(evento.date));
	
		if(data.currentDate > evento.date) {
			html_tarjetas += `<div class="col-xs-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3 mb-4 d-flex justify-content-center">
			<div class="card h-100">
				<img src="${evento.image}" class="card-img-top" alt="${evento.name} image">
				<div class="card-body">
				<h5 class="card-title text-center">${evento.name}</h5>
					<div class="d-flex mb-0 justify-content-evenly">
						<p class="card-price d-inline mb-0"><small>${evento.date}</small></p>
						<p class="card-price d-inline mb-0"><strong>$${evento.price}</strong></p>
					</div>
				<hr class="mb-2 mt-2">
				<p class="card-text mb-2">${evento.description}</p>
				<p class="card-price mt-0"><small>Price: $${evento.price}</small></p>
				</div>
				<div class="card-footer">
					<a href="./details.html" class=${btnClass}>View Details</a>
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

div_tarjetas.innerHTML = generar_tarjetas_pasado(data);

