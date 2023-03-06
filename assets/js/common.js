
// Asignación del tipo de botón "view details" según date de la tarjeta 
let buttonClassSelector = (fecha1, fecha2) => {
	let btnClass = '"btn btn-outline-secondary"'
	if (fecha1 < fecha2){
		btnClass = '"btn btn-outline-info"'
	}
	
	return btnClass;
}

const buttonClassSelector2 = (fecha1, fecha2) => {return fecha1<=fecha2 ? '"btn btn-outline-info"' : '"btn btn-outline-secondary"' }



// SET con las categorías encontradas en la información de los eventos
const categorySetGenerator = (data) => {
	let categoriesSet = new Set();
	data.events.forEach( evento => categoriesSet.add(evento.category) )
	return categoriesSet;
}



// FUNCION PARA GENERAR LOS CHECKBOXES
const checkBoxGenerator = (data) => {

	categoriesSet = categorySetGenerator(data);

	let checkBoxHTML = `<div class="container d-sm-flex my-1 gap-2">`;

	categoriesSet.forEach(categoria => 
		{ checkBoxHTML += `	<div class="form-check ms-2">
			<input type="checkbox" class="form-check-input" value="${categoria}" id="checkCat-${categoria}">
			<label class="form-check-label" for="checkCat-${categoria}">${categoria}</label>
			</div>`
		
		});

	checkBoxHTML += "</div>"

	return checkBoxHTML;
}



// NUEVAS FUNCIONES 03/03/23
function viewDetails(card_id) {
	window.location.href = `./details.html?id=${card_id}`
}




// Solo realizo una tarjeta, que puedo concatenar con las demás
// Args: evento (objeto con los datos del evento)
// 			clase_boton (clase BS5 en base a la fecha del evento, uso la funcion buttonClassSelector)
function generar_tarjeta(evento, clase_boton){
	// console.log("Dentro del generador de tarjetas")
	// console.log(evento.id)
	// console.log(evento._id)
	return `<div class="col-xs-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3 mb-4 d-flex justify-content-center">
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
		</div>
		<div class="card-footer">
			<btn onclick="viewDetails(${evento._id})" class=${clase_boton}>View Details</btn>
		</div>
	</div>
</div>
`
}


// FUNCION FINAL PARA GENERAR TARJETAS EN FORMA DINAMICA
function generar_tarjetas2(eventos, fechaRef){

	let html_tarjetas = `<div class="row mt-5 justify-content-around mb-5">`

	if (eventos.length != 0){
		eventos.forEach((evento) => {
			html_tarjetas += generar_tarjeta(evento, buttonClassSelector2(fechaRef, evento.date))
		})
	} else {
		html_tarjetas += `<h1 class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</h1>`
	}

	return html_tarjetas + `</div>`
}















