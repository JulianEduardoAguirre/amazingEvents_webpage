
// // Asignación del tipo de botón "view details" según date de la tarjeta 
// let buttonClassSelector = (fecha1, fecha2) => {
// 	let btnClass = '"btn btn-outline-secondary"'
// 	if (fecha1 < fecha2){
// 		btnClass = '"btn btn-outline-info"'
// 	}
	
// 	return btnClass;
// }

// const buttonClassSelector2 = (fecha1, fecha2) => {return fecha1<=fecha2 ? '"btn btn-outline-info"' : '"btn btn-outline-secondary"' }



// SET OBJECT WITH THE CATEGORIES
const categorySetGenerator = (data) => {
	let categoriesSet = new Set();
	data.events.forEach( evento => categoriesSet.add(evento.category) )
	return categoriesSet;
}


// CHECKBOX SQUARES GENERATOR
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



// GO TO DETAILS
function viewDetails(card_id) {
	window.location.href = `./details.html?id=${card_id}`
}




// ONE CARD GENERATOR
function generar_tarjeta(evento, refDate){

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
			<btn onclick="viewDetails(${evento._id})" class=${refDate >= evento.date ? '"btn btn-outline-secondary"':'"btn btn-outline-info"'} >View Details</btn>
		</div>
	</div>
</div>
`
}


// ALL-CARDS GENERATOR FUNCTION
function generar_tarjetas2(eventos, fechaRef){

	let html_tarjetas = `<div class="row mt-5 justify-content-around mb-5">`

	if (eventos.length != 0){
		eventos.forEach((evento) => {
			html_tarjetas += generar_tarjeta(evento, fechaRef)
		})
	} else {
		html_tarjetas += `<h1 class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</h1>`
	}

	return html_tarjetas + `</div>`
}

function filterContent() {
	// Checkboxes (only selected)
	let categoriesFound = [];
	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

	// Input search current value
	let searchWord = document.getElementById("search").value.toLowerCase();
	
	let filteredEvents = data.events		//Initially, got all events

	// data object filter section
	if ( categoriesFound.length != 0){
		filteredEvents = data.events.filter( evento => categoriesFound.includes(evento.category))
	}

	if (searchWord != ""){
		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
	}

	div_tarjetas.innerHTML = generar_tarjetas2(filteredEvents, data.currentDate);
}













