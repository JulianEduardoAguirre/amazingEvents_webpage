
function generar_tarjetas_futuro(data){
	let html_tarjetas = `<div class="row mt-5 justify-content-around mb-5">`;
	for (const evento of data.events) {
	
		if(data.currentDate < evento.date) {
			html_tarjetas += `<div class="col-xxl-3 col-md-6 col-sm-10 mb-4 d-flex justify-content-center">
					<div class="card h-100">
						<img src="${evento.image}" class="card-img-top" alt="${evento.name} image">
						<div class="card-body">
							<h5 class="card-title">${evento.name}</h5>
							<p class="card-text">${evento.description}</p>
							<p class="card-price ms-2"><small>Price: $${evento.price}</small></p>
						</div>
						<div class="card-footer">
							<a href="./details.html" class="btn btn-outline-info">View Details</a>
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