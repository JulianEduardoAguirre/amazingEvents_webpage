// SECCION CARDS
const div_tarjetas = document.getElementById("cartas");
//Delete all previous content (if exists)
while(div_tarjetas.firstChild) {div_tarjetas.removeChild(div_tarjetas.firstChild);}

div_tarjetas.innerHTML = generar_tarjetas2(data.events, data.currentDate);	//First time rendering cards (using all data)


// FILTER SECTION (CHECKBOXES & INPUT)

// CHECKBOX CONTAINER
const div_checkboxes = document.getElementById("checkboxes")
//Delete all previous content (if exists)
while(div_checkboxes.firstChild) { div_checkboxes.removeChild(div_checkboxes.firstChild);}

div_checkboxes.innerHTML = checkBoxGenerator(data);													//Generate the checkboxes input squares




const inputSearch = document.getElementById("search")
inputSearch.addEventListener("input", megaFiltro)

const otrosCheckboxes = document.querySelectorAll(".form-check-input")
for (const checkbox of otrosCheckboxes) {
	checkbox.addEventListener("click", megaFiltro)
}


// PRUEBAS DE AHORA
const searchBoxesContent = document.querySelectorAll(".form-check-input")
const inputContent = document.getElementById("search")

let searchWord = "";

function megaFiltro() {
	// Checkboxes (only selected)
	let categoriesFound = [];
	document.querySelectorAll(".form-check-input").forEach( e => {if(e.checked == true) categoriesFound.push(e.value)})

	// Input search current value
	searchWord = document.getElementById("search").value.toLowerCase();
	
	// console.log(categoriesFound)
	// console.log(searchWord)

	let filteredEvents = data.events		//Initially, got all events

	// data object filter section
	if ( categoriesFound.length != 0){
		filteredEvents = data.events.filter( evento => categoriesFound.includes(evento.category))
		// console.log("TENGO MÄS DE 0 CATEGORIAS")
		// console.log("----------------------------------")
		// console.log(filteredEvents)
		// console.log("----------------------------------")
	}
	// else {
	// 	filteredEvents = data.events
	// }

	if (searchWord != ""){
		filteredEvents = filteredEvents.filter( evento => evento.name.toLowerCase().includes(searchWord))
		// console.log("************************************")
		// console.log(filteredEvents)
		// console.log("************************************")
	}
 	// else {
			// console.log("El input está vacío")
	// }


	// console.log(`Hasta aquí, tenemos esta cantidad de eventos: ${filteredEvents.length}`)

	// if( searchWord != "" || categoriesFound.length != 0){
	// 	div_tarjetas.innerHTML = generar_tarjetas2(filteredEvents, data.currentDate);
	// } else {
	// 	div_tarjetas.innerHTML = generar_tarjetas2(data.events, data.currentDate);
	// }

	div_tarjetas.innerHTML = generar_tarjetas2(filteredEvents, data.currentDate);
}

// FIN DE PRUEBAS DE AHORA






