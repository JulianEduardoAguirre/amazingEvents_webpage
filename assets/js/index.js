

// OBLIGADAMENTE LE ESTOY PASANDO TODO EL OBJETO DATA
function generar_tarjetas(data){
	let html_tarjetas = `<div class="row mt-5 justify-content-around mb-5">`;
	console.log(data.events)
	if (data.events.lenght != []){
		console.log("CON LENGHT")

		for (const evento of data.events) {
		
			let btnClass = buttonClassSelector(new Date(data.currentDate), new Date(evento.date));
	
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
						</div>
						<div class="card-footer">
							<a href="./details.html" class=${btnClass}>View Details</a>
						</div>
					</div>
				</div>
				`
		}

	} else {
		console.log("SIN LENGHT")
		html_tarjetas += `<h2>No coincidences</h2>`
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

div_tarjetas.innerHTML = generar_tarjetas(data);


// PARA EL SEACH BAR
// Contenedor de checkboxes
const div_checkboxes = document.getElementById("checkboxes")
while(div_checkboxes.firstChild) {
	div_checkboxes.removeChild(div_checkboxes.firstChild);
}
// Desde common.js
div_checkboxes.innerHTML = checkBoxGenerator(data);



//FILTRO?
// const new_data = filtro(data);

// div_tarjetas.innerHTML = generar_tarjetas(data);

const inputSearch = document.getElementById("search")
// console.log(inputSearch)
inputSearch.addEventListener("input", () => {
	let eventosFiltrados = data.events.filter((evento) => evento.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
	// console.log(eventosFiltrados)
	// console.log(eventosFiltrados.length)

	let new_data = {
		currentDate: data.currentDate,
		events: eventosFiltrados	
	}

	// console.log(new_data.events.length)

// Contenedor de tarjetas
const div_tarjetas = document.getElementById("cartas");
//Si tiene contenido, lo elimino primero
while(div_tarjetas.firstChild) {
					div_tarjetas.removeChild(div_tarjetas.firstChild);
			}

div_tarjetas.innerHTML = generar_tarjetas(new_data);


})


